const express = require('express');
const { checkDB } = require('../../controllers/health.controller')
const router = express.Router();

router.get('/', (req, res) => {
  const dbHealth = checkDB();
  dbHealth.then(result => {
    res.status(200).json({
      status: 'success',
      message: 'Welcome to the Words API',
    });
  }).catch(err => {
    res.status(500).json({
      status: 'error',
      message: 'Error connecting to database',
    });
  });
});

module.exports = router;