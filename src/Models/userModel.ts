import { model, Schema, Document } from 'mongoose';
import { iUser } from '@Interfaces/iUser';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const mUser = model<iUser & Document>('iUser', userSchema);

export default mUser;
