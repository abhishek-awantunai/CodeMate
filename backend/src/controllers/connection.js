const Connection = require('../models/Connection');
const User = require('../models/User');

const sendConnectionController = async (req, res) => {
    try {
        const { connectionId, status } = req.params;
        const allowedStatuses = ['interested', 'ignored'];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({ error: 'Invalid status provided' });
        }
        
        const user = req.user;
        const connectionUser = await User.findById(connectionId);

        if (!connectionUser || !connectionUser.isActive) {
            return res.status(404).json({ error: 'User does not exist or has been deleted' });
        }

        const newConnection = new Connection({
            userId: user._id,
            connectionId: connectionId,
            status: status,
        });
        
        await newConnection.save();
        
        res.json({
            message: `${user?.firstName} ${user?.lastName} sent connection request to ${connectionUser.firstName} ${connectionUser?.lastName}`,
            data: newConnection,
        });

    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const receiveConnectionController = async (req, res) => {
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

module.exports = {
    sendConnectionController,
    receiveConnectionController,
};