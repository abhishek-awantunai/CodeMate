const User = require('../models/User');
const { validateSignUpData } = require('../utils/validation');
const bcrypt = require('bcrypt');

const registerController = async (req, res) => {
    try {
        // Validate the request body
        const userData = validateSignUpData(req.body);

        // Encrypt the password
        const updatedPassword = await bcrypt.hash(userData.password, 10);

        const user = await User.create(userData);
        user.password = updatedPassword;

        await user.save();

        const token = await user.getJWT();

        res.cookie('token', token, {
            expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });
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
        const isMatch = await user.validatePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = await user.getJWT();

        res.cookie('token', token, {
            expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });
        res.json({
            status: true,
            message: 'Login successful',
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
    logoutController,
};