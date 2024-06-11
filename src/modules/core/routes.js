import infoRouter from '../info/Routes';
import drawRouter from '../draw/Routes';
import homeRouter from '../home/Routes';
import authRoutes from '../User/authRoutes';
import protectedRoutes from '../middleware/protectedRoutes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/draw', drawRouter);
  app.use('/users', authRoutes);
  app.use('/protected', protectedRoutes);
  app.use('/', homeRouter);
}
