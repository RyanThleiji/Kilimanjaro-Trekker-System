import mongoose from 'mongoose';

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

// TODO: When MongoDB Atlas is ready:
// 1. Put the connection string in server/.env as MONGO_URI=...
// 2. Never commit the real .env file.
// 3. Verify IP/network access and database user credentials in Atlas.
