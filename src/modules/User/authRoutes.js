import express from 'express';
import { register, login, deleteAllUsers } from './authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/delete-all-users', deleteAllUsers);

export default router;
