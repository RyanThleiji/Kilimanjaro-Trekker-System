import mongoose from 'mongoose';

const hikeRegistrationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    trailId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trail', required: true },
    hikeDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ['planned', 'active', 'completed', 'cancelled'],
      default: 'planned',
    },
  },
  { timestamps: true }
);

// TODO: Add indexes if date/trail queries become frequent.

export default mongoose.model('HikeRegistration', hikeRegistrationSchema);
