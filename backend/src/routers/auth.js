const express = require('express');
const authRouter = express.Router();
const { getUserListController, registerController, loginController, getUserProfileController, logoutController } = require('../controllers/auth');


authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/profile', getUserProfileController);
authRouter.get('/users', getUserListController);
authRouter.get('/logout', logoutController);

module.exports = authRouter;