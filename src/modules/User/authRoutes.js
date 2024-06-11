import express from 'express';
import { register, login, deleteAllUsers } from './authController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/delete-all-users', verifyToken, isAdmin, deleteAllUsers);

export default router;