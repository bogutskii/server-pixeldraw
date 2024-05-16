import express from 'express';

import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import ignoreFavicon from './modules/core/ignoreFavicon';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';

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
