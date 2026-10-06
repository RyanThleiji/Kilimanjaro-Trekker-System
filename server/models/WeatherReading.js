import mongoose from 'mongoose';

const weatherReadingSchema = new mongoose.Schema({
  location: { type: String, required: true, trim: true },
  temperature: { type: Number, required: true },
  conditions: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now },
});

// TODO: Compare readings for the same location within 15 minutes.
// If temperature changes by +/- 15 F, create a warning Event and Broadcast.

export default mongoose.model('WeatherReading', weatherReadingSchema);
