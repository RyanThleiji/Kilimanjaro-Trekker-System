import HikeRegistration from '../models/HikeRegistration.js';

export const getHikeRegistrations = async (req, res) => {
  try {
    const items = await HikeRegistration.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createHikeRegistration = async (req, res) => {
  try {
    const hikeRegistration = await HikeRegistration.create(req.body);
    res.status(201).json(hikeRegistration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
