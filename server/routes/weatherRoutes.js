import { Router } from 'express';
import { getWeatherReadings, createWeatherReading } from '../controllers/weatherController.js';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// Collection GET/POST are implemented; individual read/update/delete remain scaffolded.
// CRUD reference for WeatherReading:
// GET    /api/weather-readings
// GET    /api/weather-readings/:id
// POST   /api/weather-readings
// PUT    /api/weather-readings/:id
// DELETE /api/weather-readings/:id

router.get('/', getWeatherReadings);
router.get('/:id', notImplemented);
router.post('/', createWeatherReading);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
