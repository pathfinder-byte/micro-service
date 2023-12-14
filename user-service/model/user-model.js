import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const userSchema = new Schema({
  googleId: { type: String, required: true, unique: true },
  screenName: { type: String },
  name: { type: String },
  email: { type: String },
  profileImage: { type: String },
  type: { type: String },
});

const User = model('user', userSchema);

export default User;
