import bcrypt from 'bcryptjs';
import User from './userModel.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const bytes = CryptoJS.AES.decrypt(password, process.env.JWT_SECRET);
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    console.log('Decrypted Password:', decryptedPassword);

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(decryptedPassword, 10);
    console.log('Hashed Password:', hashedPassword);

    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();
    console.log('User saved:', newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const bytes = CryptoJS.AES.decrypt(password, process.env.JWT_SECRET);
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    console.log('Decrypted Password:', decryptedPassword);

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('User found:', user);

    const isPasswordValid = await bcrypt.compare(decryptedPassword, user.password);
    console.log('Password Valid:', isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: 'All users deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting users' });
  }
};
