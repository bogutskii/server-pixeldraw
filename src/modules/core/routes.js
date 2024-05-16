const infoRouter = require('../info/Routes');
const drawRouter = require('../draw/Routes');
// const home = require('../home/home');

module.exports = function routes(app) {
  // app.use('/', home);
  app.use('/info', infoRouter);
  app.use('/draw', drawRouter);
};
