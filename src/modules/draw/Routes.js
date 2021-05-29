import { Router } from 'express';
import drawGetAll from './drawGetAll';

import drawAdd from './drawAdd';
import drawDeleteAll from './drawDeleteAll';
import drawDeleteById from './drawDeleteById';

const router = Router();

router.post('/', drawAdd);
router.get('/', drawGetAll);
router.delete('/', drawDeleteAll);
router.delete('/:drawId', drawDeleteById);

export default router;
