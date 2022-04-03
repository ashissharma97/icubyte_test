const pool = require('../db');

function checkDB() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT 1 + 1 AS solution', (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = { checkDB };