const User = require('../models/User');

const registerController = async (req, res) => {
    try {
        const user = await User.create(req.body);
        await user.save();
        res.json({
            message: 'User registered successfully',
            data: user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }    
};

const getUserListController = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({
            message: 'User list fetched successfully',
            data: users,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}

module.exports = {
    registerController,
    getUserListController,
};