const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'incubyte',
  password: 'postgres',
  port: 5432,
})

pool.query('CREATE TABLE IF NOT EXISTS words (id SERIAL PRIMARY KEY, word TEXT NOT NULL)', (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log('Table created successfully')
  }
})

module.exports = pool