const express = require('express');
const authRouter = express.Router();
const { getUserListController, registerController } = require('../controllers/auth');


authRouter.post('/register', registerController);
authRouter.get('/users', getUserListController);

module.exports = authRouter;