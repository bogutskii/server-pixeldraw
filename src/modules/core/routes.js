import infoRouter from '../info/Routes';
import drawRouter from '../draw/Routes';
import home from '../home/home';

export default function routes(app) {
  app.use('/', home);
  app.use('/info', infoRouter);
  app.use('/draw', drawRouter);
}
