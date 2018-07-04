import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || 'postgres://rffgwprh:dfbnXahzqPCnuaAkuxdPafGYWQMv9HlZ@stampy.db.elephantsql.com:5432/rffgwprh';

const db = new Pool({
  connectionString,
});

export default db;
