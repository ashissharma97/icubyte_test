const pool = require('../db');

function readAll() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM words', (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = { readAll };