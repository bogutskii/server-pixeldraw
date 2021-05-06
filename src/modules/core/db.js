import mongoose from 'mongoose';
function dbConnect() {
  mongoose.connect(
    'mongodb+srv://admin:0PXxmO8xUa0JCXzA@cluster0.lnqmt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  );

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('CONNECTED');
  });
}
export default dbConnect;
// 'mongodb://localhost:27017/draw-server',
