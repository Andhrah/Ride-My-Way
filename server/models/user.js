import db from './connect';

db.connect((err) => {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  db.query(
    'CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, fullName VARCHAR(255) not null, email VARCHAR(255) UNIQUE not null, password VARCHAR(255) not null);',
    (error) => {
      if (error) {
        return console.error('error running query', error);
      }
      console.log('Your query was successful');
    },
  );
});

export default db;
