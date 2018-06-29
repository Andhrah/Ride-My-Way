import express from 'express';
import bodyParser from 'body-parser';
import Pool from 'pg';
import router from './routes';

const app = express();

const connectionString = 'postgres://rffgwprh:dfbnXahzqPCnuaAkuxdPafGYWQMv9HlZ@stampy.db.elephantsql.com:5432/rffgwprh';

app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString,
});

app.use('/api/v1', router);

app.listen(process.env.PORT || 3000, () => {
  console.log('App running on port 3000');
});

export default app;
