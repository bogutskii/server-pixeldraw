module.exports = (app) => {
  app.use((req, res, next) => {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).json({ noContent: true });
    } else {
      next();
    }
  });
};
