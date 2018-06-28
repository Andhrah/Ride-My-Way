import requestDb from '../../data/requests';

const getRideRequests = (req, res) => {
  res.status(200).json(requestDb);
};

export default getRideRequests;
