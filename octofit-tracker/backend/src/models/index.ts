import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true }
}, {
  timestamps: true
});

const teamSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  members: { type: Number, required: true },
  focus: { type: String, required: true }
}, {
  timestamps: true
});

const activitySchema = new Schema({
  id: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: String, required: true }
}, {
  timestamps: true
});

const leaderboardEntrySchema = new Schema({
  id: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true },
  points: { type: Number, required: true },
  rank: { type: Number, required: true }
}, {
  timestamps: true
});

const workoutSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: { type: Number, required: true }
}, {
  timestamps: true
});

export const User = model('User', userSchema);
export const Team = model('Team', teamSchema);
export const Activity = model('Activity', activitySchema);
export const LeaderboardEntry = model('LeaderboardEntry', leaderboardEntrySchema);
export const Workout = model('Workout', workoutSchema);

export const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  await mongoose.connect(uri);
  console.log(`Connected to MongoDB at ${uri}`);
  return mongoose.connection;
};
