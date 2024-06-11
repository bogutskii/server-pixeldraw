import { Router } from 'express';
import home from './home';

const router = Router();

router.post('/', home);
export default router;
