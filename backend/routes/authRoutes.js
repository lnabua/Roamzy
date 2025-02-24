import express from 'express';
import { login, logout, signup } from '../controllers/authController.js';

const router = express.Router();

// CREATE NEW USER
router.post('/signup', signup);

// USER LOGIN
router.post('/login', login);

// USER LOGOUT
router.post('/logout', logout);

export default router;