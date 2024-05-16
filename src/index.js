const express = require('express');
const errorHandler = require('./modules/core/errorHandler');
const logger = require('./modules/core/logger');
const parseResponse = require('./modules/core/parseResponse');
const ignoreFavicon = require('./modules/core/ignoreFavicon');
const cors = require('./modules/core/cors');
const routes = require('./modules/core/routes');
const dbConnect = require('./modules/core/db');

const app = express();
const PORT = process.env.PORT || 8000;

dbConnect();
logger(app);
parseResponse(app);
cors(app);
ignoreFavicon(app);
routes(app);
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
