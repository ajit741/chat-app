import express from 'express';
import User from '../modals/user.js';
import { signup,login,getUser } from '../controllers/auth.controller.js';
const router = express.Router();


router.post('/register',signup);
router.post('/login',login);
router.get('/users',getUser);

export default router;

