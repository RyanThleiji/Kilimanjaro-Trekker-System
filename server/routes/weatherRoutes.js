import { Router } from 'express';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// TODO: Replace placeholder handlers with real controller functions.
// CRUD reference for WeatherReading:
// GET    /api/weather-readings
// GET    /api/weather-readings/:id
// POST   /api/weather-readings
// PUT    /api/weather-readings/:id
// DELETE /api/weather-readings/:id

router.get('/', notImplemented);
router.get('/:id', notImplemented);
router.post('/', notImplemented);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
