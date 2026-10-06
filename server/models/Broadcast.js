import mongoose from 'mongoose';

const broadcastSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  message: { type: String, required: true },
  status: {
    type: String,
    enum: ['queued', 'sent', 'failed'],
    default: 'queued',
  },
  createdAt: { type: Date, default: Date.now },
  sentAt: { type: Date },
});

// TODO: This stores broadcast status/history.
// TODO: Actual delivery behavior belongs in server/services/broadcastService.js.

export default mongoose.model('Broadcast', broadcastSchema);
