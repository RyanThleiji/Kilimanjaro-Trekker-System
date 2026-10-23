import { Router } from 'express';
import { getHikeRegistrations, createHikeRegistration } from '../controllers/hikeRegistrationController.js';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// Collection GET/POST are implemented; individual read/update/delete remain scaffolded.
// CRUD reference for HikeRegistration:
// GET    /api/hike-registrations
// GET    /api/hike-registrations/:id
// POST   /api/hike-registrations
// PUT    /api/hike-registrations/:id
// DELETE /api/hike-registrations/:id

router.get('/', getHikeRegistrations);
router.get('/:id', notImplemented);
router.post('/', createHikeRegistration);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
