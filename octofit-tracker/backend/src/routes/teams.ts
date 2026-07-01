import { Router, Request, Response } from 'express';
import { Team } from '../models/index.js';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const teams = await Team.find({}).lean();
  res.json(teams);
});

router.get('/:id', async (req: Request, res: Response) => {
  const team = await Team.findOne({ id: Number(req.params.id) }).lean();
  if (!team) {
    res.status(404).json({ error: 'Team not found' });
    return;
  }
  res.json(team);
});

router.post('/', async (req: Request, res: Response) => {
  const newTeam = await Team.create({ ...req.body, id: Date.now() });
  res.status(201).json(newTeam);
});

export default router;
