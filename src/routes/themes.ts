import { Router } from 'express';
import { getThemes } from '../controllers/themes';

const router = Router();

// GET /themes
router.get ('/', getThemes);

// GET /themes/:id
router.get('/:id');

// POST /themes
router.post('/');

export default router;