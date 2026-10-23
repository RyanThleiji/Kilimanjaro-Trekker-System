import { Router } from 'express';
import { getEvents, createEvent } from '../controllers/eventController.js';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// Collection GET/POST are implemented; individual read/update/delete remain scaffolded.
// CRUD reference for Event:
// GET    /api/events
// GET    /api/events/:id
// POST   /api/events
// PUT    /api/events/:id
// DELETE /api/events/:id

router.get('/', getEvents);
router.get('/:id', notImplemented);
router.post('/', createEvent);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
