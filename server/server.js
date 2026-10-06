import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import hikeRegistrationRoutes from './routes/hikeRegistrationRoutes.js';
import trailRoutes from './routes/trailRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js';
import facilityRoutes from './routes/facilityRoutes.js';
import broadcastRoutes from './routes/broadcastRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// The server can run before MongoDB is configured.
// Once MONGO_URI is added to server/.env, the connection will be attempted here.
if (process.env.MONGO_URI) {
  await connectDB();
} else {
  console.log('MongoDB not connected: MONGO_URI is empty.');
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', databaseConfigured: Boolean(process.env.MONGO_URI) });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/hike-registrations', hikeRegistrationRoutes);
app.use('/api/trails', trailRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/weather-readings', weatherRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/broadcasts', broadcastRoutes);

// TODO: Add shared error-handling middleware before the project is feature-complete.

app.listen(PORT, () => {
  console.log(`KTS backend running on http://localhost:${PORT}`);
});
