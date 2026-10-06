import { Router } from 'express';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// TODO: Replace placeholder handlers with real controller functions.
// CRUD reference for Broadcast:
// GET    /api/broadcasts
// GET    /api/broadcasts/:id
// POST   /api/broadcasts
// PUT    /api/broadcasts/:id
// DELETE /api/broadcasts/:id

router.get('/', notImplemented);
router.get('/:id', notImplemented);
router.post('/', notImplemented);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
