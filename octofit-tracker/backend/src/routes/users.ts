import { Router, Request, Response } from 'express';
import { User } from '../models/index.js';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const users = await User.find({}).lean();
  res.json(users);
});

router.get('/:id', async (req: Request, res: Response) => {
  const user = await User.findOne({ id: Number(req.params.id) }).lean();
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(user);
});

router.post('/', async (req: Request, res: Response) => {
  const newUser = await User.create({ ...req.body, id: Date.now() });
  res.status(201).json(newUser);
});

export default router;
