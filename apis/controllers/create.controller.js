const pool = require('../db');

function createRecord(record) {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO words(word) VALUES($1) RETURNING *',[record], (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = { createRecord };