const Chat = require('../models/Chat');

const getChatMessagesController = async (req, res) => {
    try {
        const { targetUserId } = req.params;
        const { user } = req;
        const {_id: userId} = user;


        let chat = await Chat.findOne({
            participants: {
                $all: [userId, targetUserId],
            }
        });

        if (!chat) {
            chat = new Chat({
                participants: [userId, targetUserId],
                messages: [],
            })
        }

        await chat.save();
        
        res.json({
            data: chat,
            status: true,
            message: 'Chat fetched successfully',
        })
    } catch (error) {
        return res.status(400).json({ error: error.message || 'Internal Server Error' });
    }
}

module.exports = {
    getChatMessagesController,
};