import db from '../../data/rides';

const createRide = (req, res) => {
  const { from, to, departure } = req.body;
  const lastRide = db[db.length - 1];
  const newRide = {
    id: lastRide.id + 1,
    from,
    to,
    departure,
  };
  db.push(newRide);
  res.status(201).json({
    message: 'Ride offer created successfully.',
  });
};

export default createRide;
