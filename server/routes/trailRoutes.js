import { Router } from 'express';
import {
  getTrails,
  createTrail,
} from '../controllers/trailController.js';

const router = Router();

router.get('/', getTrails);
router.post('/', createTrail);

export default router;