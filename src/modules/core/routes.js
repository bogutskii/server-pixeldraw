import infoRouter from '../info/Routes';
import drawRouter from '../draw/Routes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/draw', drawRouter);
}
