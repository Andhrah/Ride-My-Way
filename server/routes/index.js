import express from 'express';
import db from '../data/rides';

const router = express.Router();

router.get('/rides', (req, res) => {
  res.json(db);
});

export default router;
