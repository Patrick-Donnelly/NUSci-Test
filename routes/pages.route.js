import express from 'express';
import path from 'path';
import UserController from '../controllers/users.controller.js';

const router = express.Router();

router.route('/').get(UserController.getAllUsers);

router.route('/css/index.css').get((req, res) => {
    res.sendFile(path.resolve() + '/css/index.css');
});

router.route('/css/login-page').get(UserController.getLoginPage);

router.route('/css/sign-up').get(UserController.getSignupPage);

export default router;
