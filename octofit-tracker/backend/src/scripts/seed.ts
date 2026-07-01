import mongoose from 'mongoose';
import { connectToDatabase, User, Team, Activity, LeaderboardEntry, Workout } from '../models/index.js';

/*
Seed the octofit_db database with test data.
*/

const seedDatabase = async () => {
  await connectToDatabase();

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({})
  ]);

  const users = await User.insertMany([
    { id: 1, name: 'Ava Patel', email: 'ava.patel@example.com', role: 'runner' },
    { id: 2, name: 'Liam Chen', email: 'liam.chen@example.com', role: 'coach' },
    { id: 3, name: 'Mina Ortiz', email: 'mina.ortiz@example.com', role: 'triathlete' }
  ]);

  const teams = await Team.insertMany([
    { id: 1, name: 'North Stars', members: 8, focus: 'endurance' },
    { id: 2, name: 'River Runners', members: 6, focus: 'speed' }
  ]);

  const activities = await Activity.insertMany([
    { id: 1, userId: users[0].id, type: 'run', duration: 35, date: '2026-07-01' },
    { id: 2, userId: users[1].id, type: 'cycle', duration: 45, date: '2026-07-01' },
    { id: 3, userId: users[2].id, type: 'swim', duration: 30, date: '2026-07-02' }
  ]);

  const leaderboard = await LeaderboardEntry.insertMany([
    { id: 1, userId: users[0].id, points: 1250, rank: 1 },
    { id: 2, userId: users[2].id, points: 1180, rank: 2 },
    { id: 3, userId: users[1].id, points: 1100, rank: 3 }
  ]);

  const workouts = await Workout.insertMany([
    { id: 1, title: 'Tempo Run', difficulty: 'moderate', duration: 30 },
    { id: 2, title: 'Strength Circuit', difficulty: 'advanced', duration: 40 },
    { id: 3, title: 'Open Water Swim', difficulty: 'moderate', duration: 25 }
  ]);

  console.log('Seed the octofit_db database with test data');
  console.log(JSON.stringify({ users, teams, activities, leaderboard, workouts }, null, 2));
  await mongoose.disconnect();
};

seedDatabase().catch((error) => {
  console.error('Seed failed', error);
  process.exit(1);
});
