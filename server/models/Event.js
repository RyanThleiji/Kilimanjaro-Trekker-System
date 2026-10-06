import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    type: {
      type: String,
      enum: ['information', 'warning'],
      required: true,
    },
    category: {
      type: String,
      enum: ['weather', 'construction', 'local_event', 'emergency', 'trail'],
      required: true,
    },
    location: { type: String, default: '' },
    startDate: { type: Date },
    endDate: { type: Date },
    relatedTrailId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trail' },
    relatedFacilityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Facility' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

// TODO: When type === 'warning', trigger Broadcast creation/sending in service logic.

export default mongoose.model('Event', eventSchema);
