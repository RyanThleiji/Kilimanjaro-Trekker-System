import { Router } from 'express';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// TODO: Replace placeholder handlers with real controller functions.
// CRUD reference for Event:
// GET    /api/events
// GET    /api/events/:id
// POST   /api/events
// PUT    /api/events/:id
// DELETE /api/events/:id

router.get('/', notImplemented);
router.get('/:id', notImplemented);
router.post('/', notImplemented);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
