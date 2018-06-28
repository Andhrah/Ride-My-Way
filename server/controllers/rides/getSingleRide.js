import db from '../../data/rides';

const getSingleRide = (req, res) => {
  // find the ride offer with provided ID
  const ride = db.find(rideInDb => rideInDb.id === Number(req.params.id));
  if (!ride) {
    return res.json({
      message: 'Ride not found',
    });
  }
  res.status(200).json(ride);
};

export default getSingleRide;
