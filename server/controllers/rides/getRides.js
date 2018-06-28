import db from '../../data/rides';

const getRides = (req, res) => {
  res.json(db);
};

export default getRides;
