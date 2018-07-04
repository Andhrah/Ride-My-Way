import express from 'express';
import controllers from '../controllers';

const router = express.Router();

// INDEX - displays a list of ride offers
router.get('/rides', controllers.getRides);

// SHOW - displays more information about one ride offer
router.get('/rides/:id', controllers.getSingleRide);

// New - create new ride
router.post('/rides', controllers.createRide);

router.post('/rides/:id/requests', controllers.createRideRequest);

router.get('/requests', controllers.getRideRequests);

router.post('/auth/signup', controllers.newUser);

export default router;
