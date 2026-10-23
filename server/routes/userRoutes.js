import { Router } from 'express';
import { getUsers, createUser } from '../controllers/userController.js';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// Collection GET/POST are implemented; individual read/update/delete remain scaffolded.
// CRUD reference for User:
// GET    /api/users
// GET    /api/users/:id
// POST   /api/users
// PUT    /api/users/:id
// DELETE /api/users/:id

router.get('/', getUsers);
router.get('/:id', notImplemented);
router.post('/', createUser);
router.put('/:id', notImplemented);
router.delete('/:id', notImplemented);

export default router;
