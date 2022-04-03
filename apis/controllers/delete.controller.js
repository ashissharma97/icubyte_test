const pool = require('../db');

function deleteRecord(id) {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM words WHERE id = $1 RETURNING *',[id], (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = { deleteRecord };