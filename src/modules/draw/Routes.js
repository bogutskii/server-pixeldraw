import { Router } from 'express';
import drawGetAll from './drawGetAll';
// import userGetById from './userGetById';
// import userUpdateById from './userUpdateById';
// import userDeleteById from './userDeleteById';
// import userDeleteAll from './userDeleteAll';
// import userLogin from './userLogin';
import drawAdd from './drawAdd';

const router = Router();

router.post('/', drawAdd);
//router.get('/login', userLogin);
router.get('/', drawGetAll);
//router.get('/:userId', userGetById); // GET http://localhost:5000/user/6056ebab2e3c27fead4aee39
// router.patch('/:userId', userUpdateById); // PATCH http://localhost:5000/user/6056ebab2e3c27fead4aee39
// router.delete('/:userId', userDeleteById); // DELETE http://localhost:5000/user/6056ebab2e3c27fead4aee39
// router.delete('/', userDeleteAll); // DELETE http://localhost:5000/user/6056ebab2e3c27fead4aee39
export default router;
