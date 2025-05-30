const { Server } = require('socket.io');

const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:8000',
            credentials: true,
        }
    });

    io.on('connection', (socket) => {
        socket.on('joinRoom', ({ userId, targetUserId }) => {
            const roomId = [userId, targetUserId].sort().join('_');
            socket.join(roomId);
            console.log(`${userId} and ${targetUserId} joined room ${roomId}`);
        });

        socket.on('sendMessage', ({ userId, targetUserId, message }) => {
            const roomId = [userId, targetUserId].sort().join('_');
            io.to(roomId).emit('messageReceived', {
                from: userId,
                message,
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
