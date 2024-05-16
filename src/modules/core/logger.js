import morgan from 'morgan';

module.exports = function logger(app) {
  app.use(morgan('dev'));
};
