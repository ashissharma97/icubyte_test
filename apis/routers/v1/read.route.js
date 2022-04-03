const express = require('express');
const { readAll } = require('../../controllers/read.controller')

const router = express.Router();

router.get('/', async (req,res) => {
  const allWords = await readAll();
  res.json(allWords.rows).status(200);
})

module.exports = router;