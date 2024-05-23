import infoRouter from '../info/Routes';
import drawRouter from '../draw/Routes';
import home from '../home/home';
import authRoutes from '../User/authRoutes';
import protectedRoutes from '../middleware/protectedRoutes';

export default function routes(app) {
  app.use('/', home);
  app.use('/info', infoRouter);
  app.use('/draw', drawRouter);

  app.use('/auth', authRoutes);
  app.use('/protected', protectedRoutes);
}
