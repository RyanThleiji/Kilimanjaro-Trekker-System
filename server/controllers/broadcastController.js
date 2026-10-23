import Broadcast from '../models/Broadcast.js';

export const getBroadcasts = async (req, res) => {
  try {
    const items = await Broadcast.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBroadcast = async (req, res) => {
  try {
    const broadcast = await Broadcast.create(req.body);
    res.status(201).json(broadcast);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
