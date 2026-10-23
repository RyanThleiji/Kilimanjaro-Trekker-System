import User from '../models/User.js';

export const getUsers = async (req, res) => {
  try {
    const items = await User.find().select('-passwordHash');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userResponse = user.toObject();
    delete userResponse.passwordHash;
    res.status(201).json(userResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
