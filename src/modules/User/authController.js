import bcrypt from 'bcryptjs';
import User from './userModel.js';
import CryptoJS from 'crypto-js';

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Decrypt the password
    const bytes = CryptoJS.AES.decrypt(password, process.env.SECRET_KEY);
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or Email already exists' });
    }

    // Hash the decrypted password
    const hashedPassword = await bcrypt.hash(decryptedPassword, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Decrypt the password
    const bytes = CryptoJS.AES.decrypt(password, process.env.SECRET_KEY);
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Invalid username' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(decryptedPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
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
