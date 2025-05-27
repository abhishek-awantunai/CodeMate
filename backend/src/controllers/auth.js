const User = require('../models/User');
const { validateSignUpData } = require('../utils/validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    try {
        // Validate the request body
        const userData = validateSignUpData(req.body);

        // Encrypt the password
        const updatedPassword = await bcrypt.hash(userData.password, 10);

        const user = await User.create(userData);
        user.password = updatedPassword;

        await user.save();
        res.json({
            message: 'User registered successfully',
            data: user,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }    
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });
        res.json({
            message: 'Login successful',
            data: user,
        });

    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const getUserListController = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({
            message: 'User list fetched successfully',
            data: users,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const getUserProfileController = async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ error: 'User is Unauthorized please login to proceed' });
        }

        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedToken) {
            return res.status(401).json({ error: 'User is Unauthorized please login to proceed' });
        }

        const profileId = decodedToken?.id;
        if (!profileId) {
            return res.status(400).json({ error: 'Profile ID is required' });
        }
        const user = await User.findOne({_id: profileId});
        res.json({
            message: 'User fetched successfully',
            data: user,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const logoutController = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });
        res.json({
            message: 'Logout successful',
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

module.exports = {
    registerController,
    loginController,
    getUserListController,
    getUserProfileController,
    logoutController,
};