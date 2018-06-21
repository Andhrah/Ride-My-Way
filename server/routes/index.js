import express from 'express';

const router = express.Router();

router.get('/rides', (req, res) => {
  res.json(['ride 1' , 'ride 2'])
})
router.get('/rides/:id', (req, res) => {
  res.json({ ride: 'ride 1' })
})
router.post('/rides', (req, res) => {
  res.json(['ride 1', 'ride 2'])
})
router.post('/rides/:id/requests', (req, res) => {
  res.json(['requests 1', 'requests 2'])
})


export default router;
