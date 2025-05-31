const { Server } = require('socket.io');
const crypto = require('crypto');
const Chat = require('./src/models/Chat');

const getSecretRoomId = (userId, targetUserId) => {
    const id = [userId, targetUserId].sort().join('_');
    return  crypto.createHash('sha256').update(id).digest('hex');
}

const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:8000',
            credentials: true,
        }
    });

    io.on('connection', (socket) => {
        socket.on('joinRoom', ({ userId, targetUserId }) => {
            const roomId = getSecretRoomId(userId, targetUserId);
            console.log(`Users joined room ${roomId}`)
            socket.join(roomId);
        });

        socket.on('sendMessage', async ({ userId, targetUserId, text }) => {
            const roomId = getSecretRoomId(userId, targetUserId);

            try {
                let chat = await Chat.findOne({
                    participants: {
                        $all: [userId, targetUserId]
                    }
                })

                if (!chat) {
                    chat = new Chat({
                        participants: [userId, targetUserId],
                        messages: []
                    })
                }

                chat.messages.push({
                    senderId: userId,
                    text
                });

                await chat.save();
            } catch (error) {
                console.log(error);
            }

            io.to(roomId).emit('messageReceived', {
                _id: new Date().getTime(),
                senderId: userId,
                targetUserId,
                text,
                createdAt: new Date(Date.now() - 3600000).toISOString()
            });
        });

        socket.on('disconnect', () => {
            console.log('❌ Client disconnected:', socket.id);
        });
    });
};

module.exports = {
    initializeSocket,
};
