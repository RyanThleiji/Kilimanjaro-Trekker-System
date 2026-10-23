import Event from '../models/Event.js';

export const getEvents = async (req, res) => {
  try {
    const items = await Event.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
