import WeatherReading from '../models/WeatherReading.js';

export const getWeatherReadings = async (req, res) => {
  try {
    const items = await WeatherReading.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createWeatherReading = async (req, res) => {
  try {
    const weatherReading = await WeatherReading.create(req.body);
    res.status(201).json(weatherReading);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
