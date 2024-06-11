import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './modules/core/errorHandler.js';
import logger from './modules/core/logger.js';
import parseResponse from './modules/core/parseResponse.js';
import ignoreFavicon from './modules/core/ignoreFavicon.js';
import cors from './modules/core/cors.js';
import routes from './modules/core/routes.js';
import dbConnect from './modules/core/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// app.use(express.json());

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
