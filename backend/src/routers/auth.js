const express = require('express');
const authRouter = express.Router();
const { registerController, loginController, logoutController } = require('../controllers/auth');
const { userAuth } = require('../middleware/auth');


authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/logout', userAuth, logoutController);

module.exports = authRouter;