import { Router } from 'express';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// TODO: Replace placeholder handlers with real controller functions.
// CRUD reference for Facility:
// GET    /api/facilities
// GET    /api/facilities/:id
// POST   /api/facilities
// PUT    /api/facilities/:id
// DELETE /api/facilities/:id

router.get('/', notImplemented);
router.get('/:id', notImplemented);
router.post('/', notImplemented);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
