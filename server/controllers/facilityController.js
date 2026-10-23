import Facility from '../models/Facility.js';

export const getFacilities = async (req, res) => {
  try {
    const items = await Facility.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFacility = async (req, res) => {
  try {
    const facility = await Facility.create(req.body);
    res.status(201).json(facility);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
