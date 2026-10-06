import { Router } from 'express';
import { notImplemented } from '../controllers/placeholderController.js';

const router = Router();

// TODO: Implement account registration and login.
// POST /api/auth/register
// - Validate request
// - Hash password on backend
// - Save passwordHash on User
// - Never return passwordHash
//
// POST /api/auth/login
// - Find User by email
// - Compare submitted password to passwordHash
// - Return session/token

router.post('/register', notImplemented);
router.post('/login', notImplemented);

export default router;
