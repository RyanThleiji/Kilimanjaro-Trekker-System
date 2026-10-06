import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: ['public', 'ranger', 'staff', 'guide'],
      default: 'public',
    },
  },
  { timestamps: true }
);

// TODO: Add password hashing in an auth/register service before creating User records.
// TODO: Never send passwordHash back to the frontend.

export default mongoose.model('User', userSchema);
