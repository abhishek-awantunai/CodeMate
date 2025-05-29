const express = require('express');
const connectionRouter = express.Router();
const { sendConnectionController, receiveConnectionController, getConnectionRequests, getConnectionsList, connectionFindController } = require('../controllers/connection');
const { userAuth } = require('../middleware/auth');


connectionRouter.get('/find', userAuth, connectionFindController);
connectionRouter.get('/requests/received', userAuth, getConnectionRequests);
connectionRouter.post('/send/:status/:connectionId', userAuth, sendConnectionController);
connectionRouter.post('/receive/:status/:connectionRequestId', userAuth, receiveConnectionController);
connectionRouter.get('/:status', userAuth, getConnectionsList);

module.exports = connectionRouter;