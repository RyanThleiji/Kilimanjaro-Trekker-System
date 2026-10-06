import mongoose from 'mongoose';

const facilitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: {
      type: String,
      enum: ['ranger_station', 'main_entrance', 'other'],
      required: true,
    },
    location: { type: String, required: true },
    status: { type: String, default: '' },
    description: { type: String, default: '' },
    hasWorkstation: { type: Boolean, default: false },
    contactInfo: { type: String, default: '' },
  },
  { timestamps: true }
);

export default mongoose.model('Facility', facilitySchema);
