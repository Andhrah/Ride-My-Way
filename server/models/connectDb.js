import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || 'postgres://rffgwprh:dfbnXahzqPCnuaAkuxdPafGYWQMv9HlZ@stampy.db.elephantsql.com:5432/rffgwprh';

const pool = new Pool({
  connectionString,
});
pool.connect((err) => {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  pool.query('SELECT * FROM Users', (error, result) => {
    if (error) {
      return console.error('error running query', error);
    }
    console.log(result.rows);
    pool.end();
  });
});

export default Pool;
