import { Router, Request, Response } from 'express';
import { LeaderboardEntry } from '../models/index.js';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const leaderboard = await LeaderboardEntry.find({}).lean();
  res.json(leaderboard);
});

router.get('/:id', async (req: Request, res: Response) => {
  const entry = await LeaderboardEntry.findOne({ id: Number(req.params.id) }).lean();
  if (!entry) {
    res.status(404).json({ error: 'Leaderboard entry not found' });
    return;
  }
  res.json(entry);
});

export default router;
