import { Router, Request, Response } from 'express';
import { Workout } from '../models/index.js';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const workouts = await Workout.find({}).lean();
  res.json(workouts);
});

router.get('/:id', async (req: Request, res: Response) => {
  const workout = await Workout.findOne({ id: Number(req.params.id) }).lean();
  if (!workout) {
    res.status(404).json({ error: 'Workout not found' });
    return;
  }
  res.json(workout);
});

router.post('/', async (req: Request, res: Response) => {
  const newWorkout = await Workout.create({ ...req.body, id: Date.now() });
  res.status(201).json(newWorkout);
});

export default router;
