import express from 'express';
import { verifyToken, isAdmin } from './authMiddleware.js';

const router = express.Router();

router.get('/admin', verifyToken, isAdmin, (req, res) => {
  res.status(200).json({ message: 'Admin access' });
});

router.get('/user', verifyToken, (req, res) => {
  res.status(200).json({ message: 'User access' });
});

export default router;
