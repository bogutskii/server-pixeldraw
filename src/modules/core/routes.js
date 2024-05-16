const infoRouter = require('../info/Routes');
const drawRouter = require('../draw/Routes');
// import home from '../home/home';

module.exports = function routes(app) {
  app.use('/', home);
  app.use('/info', infoRouter);
  app.use('/draw', drawRouter);
};
