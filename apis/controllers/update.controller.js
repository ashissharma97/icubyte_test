const pool = require('../db');

function updateRecord(word, id) {
  return new Promise((resolve, reject) => {
    pool.query('UPDATE words SET word = $1 WHERE id = $2 RETURNING *',[word, id], (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = { updateRecord };