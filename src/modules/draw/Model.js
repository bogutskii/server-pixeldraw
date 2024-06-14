import mongoose from 'mongoose';

const { Schema } = mongoose;

const drawSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  fieldSize: {
    type: Number,
    required: true,
  },
  pixelSize: {
    type: Number,
    required: true,
  },
  field: {
    type: Object,
    required: true,
  },
  username: {
    type: String,
  },
});

//userSchema.index({ email: 1 }, { unique: true }); //unique user id in db

export default mongoose.model('Draw', drawSchema);
