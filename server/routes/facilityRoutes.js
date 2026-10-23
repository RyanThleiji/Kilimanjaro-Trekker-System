import { Router } from 'express';
import { getFacilities, createFacility } from '../controllers/facilityController.js';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// Collection GET/POST are implemented; individual read/update/delete remain scaffolded.
// CRUD reference for Facility:
// GET    /api/facilities
// GET    /api/facilities/:id
// POST   /api/facilities
// PUT    /api/facilities/:id
// DELETE /api/facilities/:id

router.get('/', getFacilities);
router.get('/:id', notImplemented);
router.post('/', createFacility);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
