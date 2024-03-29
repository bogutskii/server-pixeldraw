import mongoose from 'mongoose';

const {
  NODE_ENV,
  MONGO_CONNECTION_STRING_LOCAL = 'mongodb://localhost:27017/draw-server',
  MONGO_CONNECTION_STRING = 'mongodb+srv://admin:0PXxmO8xUa0JCXzA@cluster0.lnqmt.mongodb.net/draw-server-db?retryWrites=true&w=majority', // for local test
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
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  autoIndex: false,
  useFindAndModify: false,
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

// 'mongodb://localhost:27017/draw-server',
