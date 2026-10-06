import { Router } from 'express';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// TODO: Replace placeholder handlers with real controller functions.
// CRUD reference for HikeRegistration:
// GET    /api/hike-registrations
// GET    /api/hike-registrations/:id
// POST   /api/hike-registrations
// PUT    /api/hike-registrations/:id
// DELETE /api/hike-registrations/:id

router.get('/', notImplemented);
router.get('/:id', notImplemented);
router.post('/', notImplemented);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
