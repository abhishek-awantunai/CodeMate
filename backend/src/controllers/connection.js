const Connection = require('../models/Connection');
const User = require('../models/User');

const userDataToBePassed = ['firstName', 'lastName', 'age', 'gender', 'bio', 'profilePicture'];

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
            status: true,
            message: `${user?.firstName} ${user?.lastName} ${status === 'interested' ? 'sent' : 'ignored'} connection request to ${connectionUser.firstName} ${connectionUser?.lastName}`,
            data: newConnection,
        });

    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const receiveConnectionController = async (req, res) => {
    try {
        const user = req.user;
        const allowedStatuses = ['accepted', 'rejected'];
        const { connectionRequestId, status } = req.params;
        
        // Validate the status
        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({ error: 'Invalid status provided' });
        }
        
        // Validate the connectionId
        if (!connectionRequestId) {
            return res.status(400).json({ error: 'Connection ID is required' });
        }
        
        const connection = await Connection.findById(connectionRequestId);

        if (!connection) {
            return res.status(404).json({ error: 'Connection request not found' });
        }

        if (allowedStatuses.includes(connection?.status)) {
            return res.status(400).json({ error: `Connection request already ${connection?.status}` });
        }

        connection.status = status;
        await connection.save();

        res.json({
            status: true,
            message: `Connection request ${status} successfully`,
            data: connection,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const getConnectionRequests = async (req, res) => {
    try {
        const user = req.user;
        const userId = user._id.toString();

        const connections = await Connection.find({
            connectionId: userId,
            status: 'interested'
        }).populate('userId', userDataToBePassed);

        res.json({
            status: true,
            message: 'Connection requests retrieved successfully',
            data: connections,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const getConnectionsList = async (req, res) => {
    try {
        const { status } = req.params
        const allowedStatuses = ['accepted', 'rejected', 'interested', 'ignored'];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({ error: 'Invalid status provided' });
        }

        const user = req.user;
        const userId = user._id.toString();


        const receiveStatus = ['accepted', 'rejected'];
        const connections = await Connection.find(receiveStatus.includes(status) ? {
            connectionId: userId,
            status,
        } : {
            userId,
            status,
        }).populate((receiveStatus.includes(status) ? 'userId' : 'connectionId'), userDataToBePassed);

        res.json({
            status: true,
            message: 'Connection list retrieved successfully',
            data: connections,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

const connectionFindController = async (req, res) => {
    try {
        const user = req.user;
        const userId = user?._id;

        const connections = await Connection.find({
            $or: [
                {userId},
                {connectionId: userId},
            ]
        });

        const userSet = [];
        connections.forEach(connection => {
            userSet.push(connection?.userId.toString());
            userSet.push(connection?.connectionId.toString());
        })
        
        const distinctUserSet = new Set(userSet)

        const users = await User.find({
            "_id": {
                $nin: [...distinctUserSet]
            }
        })

        res.json({
            status: true,
            message: 'List fetched successfully',
            users
        })
    
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

module.exports = {
    getConnectionsList,
    getConnectionRequests,
    connectionFindController,
    sendConnectionController,
    receiveConnectionController,
};