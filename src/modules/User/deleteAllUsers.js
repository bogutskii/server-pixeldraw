import User from './userModel.js';

const deleteAllUsers = async (req, res) => {
  try {
    const result = await User.deleteMany({});
    res.status(200).json({ message: 'All users deleted successfully', result });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting users' });
  }
};

export default deleteAllUsers;
