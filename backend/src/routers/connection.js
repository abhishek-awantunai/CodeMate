const express = require('express');
const connectionRouter = express.Router();
const { sendConnectionController, receiveConnectionController } = require('../controllers/connection');
const { userAuth } = require('../middleware/auth');


connectionRouter.post('/send/:status/:connectionId', userAuth, sendConnectionController);
connectionRouter.post('/receive', userAuth, receiveConnectionController);

module.exports = connectionRouter;