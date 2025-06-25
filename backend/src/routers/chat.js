const express = require('express');
const chatRouter = express.Router();
const { getChatMessagesController } = require('../controllers/chat');
const { userAuth } = require('../middleware/auth');

chatRouter.get('/messages/:targetUserId', userAuth, getChatMessagesController);

module.exports = chatRouter;