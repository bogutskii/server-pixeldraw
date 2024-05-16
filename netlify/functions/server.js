const express = require('express');
const serverless = require('serverless-http');
const errorHandler = require('../../src/modules/core/errorHandler');
const logger = require('../../src/modules/core/logger');
const parseResponse = require('../../src/modules/core/parseResponse');
const ignoreFavicon = require('../../src/modules/core/ignoreFavicon');
const cors = require('../../src/modules/core/cors');
const routes = require('../../src/modules/core/routes');
const dbConnect = require('../../src/modules/core/db');

const app = express();

dbConnect();
logger(app);
parseResponse(app);
cors(app);
ignoreFavicon(app);
routes(app);
errorHandler(app);

app.use('/.netlify/functions/server', app);

module.exports.handler = serverless(app);
