import { Router, Request, Response } from 'express';
import { Activity } from '../models/index.js';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const activities = await Activity.find({}).lean();
  res.json(activities);
});

router.get('/:id', async (req: Request, res: Response) => {
  const activity = await Activity.findOne({ id: Number(req.params.id) }).lean();
  if (!activity) {
    res.status(404).json({ error: 'Activity not found' });
    return;
  }
  res.json(activity);
});

router.post('/', async (req: Request, res: Response) => {
  const newActivity = await Activity.create({ ...req.body, id: Date.now() });
  res.status(201).json(newActivity);
});

export default router;
