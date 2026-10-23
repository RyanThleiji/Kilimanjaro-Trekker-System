import { Router } from 'express';
import { getBroadcasts, createBroadcast } from '../controllers/broadcastController.js';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// Collection GET/POST are implemented; individual read/update/delete remain scaffolded.
// CRUD reference for Broadcast:
// GET    /api/broadcasts
// GET    /api/broadcasts/:id
// POST   /api/broadcasts
// PUT    /api/broadcasts/:id
// DELETE /api/broadcasts/:id

router.get('/', getBroadcasts);
router.get('/:id', notImplemented);
router.post('/', createBroadcast);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
