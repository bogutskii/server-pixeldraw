import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const {
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  MONGO_CONNECTION_STRING_LOCAL,
} = process.env;

let connectionString;

switch (NODE_ENV) {
case 'local':
  connectionString = MONGO_CONNECTION_STRING_LOCAL;
  break;
default:
  connectionString = MONGO_CONNECTION_STRING;
}

const options = {
  autoIndex: false,
};

export default function dbConnect() {
  mongoose
    .connect(connectionString, options)
    .then(() => console.log('Mongo connected'))
    .catch((err) => console.log(err));

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('CONNECTED');
  });
}
