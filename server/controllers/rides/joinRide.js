import db from '../../data/rides';
import userDb from '../../data/users';
import requestDb from '../../data/requests';

const createRideRequest = (req, res) => {
  const user = userDb.find(userFromDb => userFromDb.id === Number(req.body.user_id));
  const ride = db.find(rideFromDb => rideFromDb.id === Number(req.params.id));
  if (!user) {
    return res.status(401).json({
      message: 'A user with that id was not found.',
    });
  }
  if (!ride) {
    return res.status(404).json({
      message: 'A ride with that id was not found.',
    });
  }
  const newRequest = {
    ride_id: req.params.id,
    user_id: req.body.user_id,
  };
  requestDb.push(newRequest);
  res.status(201).json({
    message: 'Request made successfully.',
  });
};

export default createRideRequest;
