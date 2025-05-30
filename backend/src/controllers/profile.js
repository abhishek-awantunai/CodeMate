const bcrypt = require('bcrypt');
const User = require('../models/User');
const { validateEditProfileData } = require('../utils/validation');

const profileViewController = async (req, res) => {
    try {
        const profileId = req?.user?._id;
        if (!profileId) {
            return res.status(400).json({ error: 'Not a valid profile' });
        }
        const user = await User.findOne({_id: profileId});
        res.json({
            status: true,
            message: 'User fetched successfully',
            data: user,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const profileEditController = async (req, res) => {
    try {
        if (validateEditProfileData(req.body)) {
            const user = req?.user;
            Object.keys(req.body).forEach(field => {
                if (field in user) {
                    user[field] = req.body[field];
                }
            });

            await user.save();

            res.json({
                status: true,
                message: 'User profile updated successfully',
                data: user,
            });
        }
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const profileUpdatePasswordController = async (req, res) => {
    try {
        const password = req?.body?.password;

        if (!password || typeof password !== 'string' || password.length < 6) {
            return res.status(400).json({ error: 'Password must be a string with at least 6 characters.' });
        }

        const user = req?.user;

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const updatedPassword = await bcrypt.hash(password, 10);
        user.password = updatedPassword;

        await user.save();

        res.json({
            status: true,
            message: 'User profile updated successfully',
            data: user,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const profileActivateController = async (req, res) => {
    try {
        const user = req?.user;
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        user.isActive = true;
        await user.save();

        res.json({
            status: true,
            message: 'User activated successfully',
            data: user,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const profileDeactivateController = async (req, res) => {
    try {
        const user = req?.user;
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        user.isActive = false;
        await user.save();

        res.json({
            status: true,
            message: 'User activated successfully',
            data: user,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const profileListController = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({
            status: true,
            message: 'User list fetched successfully',
            data: users,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

module.exports = {
    profileViewController,
    profileEditController,
    profileListController,
    profileActivateController,
    profileDeactivateController,
    profileUpdatePasswordController,
};