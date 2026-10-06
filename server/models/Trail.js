import mongoose from 'mongoose';

const trailSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    difficulty: { type: String, default: '' },
    distance: { type: Number },
    status: {
      type: String,
      enum: ['open', 'restricted', 'closed'],
      default: 'open',
    },
    condition: { type: String, default: '' },
    conditionUpdatedAt: { type: Date },
    conditionUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export default mongoose.model('Trail', trailSchema);
