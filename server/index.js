import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import Pool from '../server/models/connectDb';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString,
});

app.use('/api/v1', router);

app.listen(process.env.PORT || 3000, () => {
  console.log('App running on port 3000');
});

export default app;
