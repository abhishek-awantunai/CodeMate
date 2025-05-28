const express = require('express');
const connectionRouter = express.Router();
const { sendConnectionController, receiveConnectionController, getConnectionRequests, getConnectionsList } = require('../controllers/connection');
const { userAuth } = require('../middleware/auth');


connectionRouter.get('/requests', userAuth, getConnectionRequests);
connectionRouter.get('/:status', userAuth, getConnectionsList);
connectionRouter.post('/receive/:status/:connectionRequestId', userAuth, receiveConnectionController);
connectionRouter.post('/send/:status/:connectionId', userAuth, sendConnectionController);

module.exports = connectionRouter;