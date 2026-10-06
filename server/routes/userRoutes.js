import { Router } from 'express';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// TODO: Replace placeholder handlers with real controller functions.
// CRUD reference for User:
// GET    /api/users
// GET    /api/users/:id
// POST   /api/users
// PUT    /api/users/:id
// DELETE /api/users/:id

router.get('/', notImplemented);
router.get('/:id', notImplemented);
router.post('/', notImplemented);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
