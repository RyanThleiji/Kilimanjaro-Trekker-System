import Trail from '../models/Trail.js';

export const getTrails = async (req, res) => {
  try {
    const trails = await Trail.find();
    res.json(trails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTrail = async (req, res) => {
  try {
    const trail = await Trail.create(req.body);
    res.status(201).json(trail);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};