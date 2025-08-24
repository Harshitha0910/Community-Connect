// C:\Users\harsh\Desktop\Community-Connect\server\models\User.js 
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['resident', 'admin'], required: true },
  block: { type: String },
  flatNo: { type: String },
  mobile: { type: String },
  gender: { type: String },
  pic: {
    type: String,
    default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
  },
  profileComplete: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
 