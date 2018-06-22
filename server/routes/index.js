import express from 'express';
import db from '../data/rides';

const router = express.Router();

// INDEX - displays a list of ride offers
router.get('/rides', (req, res) => {
  res.json(db);
});

// SHOW - displays more information about one ride offer
router.get('/rides/:id', (req, res) => {
  // find the ride offer with provided ID
  const ride = db.find(rideInDb => rideInDb.id === Number(req.params.id));
  if (!ride) {
    return res.json({
      message: 'Ride not found',
    });
  }
  res.json(ride);
});

export default router;
