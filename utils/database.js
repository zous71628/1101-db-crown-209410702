const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';
if (isProduction) {
  const pool = new Pool({
    connectionString: isProduction
      ? process.env.DATABASE_URL
      : `postgresql://postgres:0000@localhost:5432/crown_02`,
  });
} else {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_02',
    password: '0000',
    port: '5432',
  });
}

// pool.query('SELECT * from category_02',(err,res)=>{
//     console.log(JSON.stringify(res.rows));
//     pool.end();
// });

module.exports = pool;
