import mongoose from 'mongoose';

const { Schema } = mongoose;

const Role = new Schema({
  value: { type: String, default: 'USER' },
});

export default mongoose.model('Role', Role);
