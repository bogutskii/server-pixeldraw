import {Router} from 'express';
import drawGetAll from './drawGetAll';

import drawAdd from './drawAdd';
import drawDeleteAll from './drawDeleteAll';

const router = Router();

router.post('/', drawAdd);
router.get('/', drawGetAll);
router.delete('/', drawDeleteAll);

export default router;
