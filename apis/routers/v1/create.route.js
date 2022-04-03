const express = require('express');
const { createRecord } = require('../../controllers/create.controller')

const router = express.Router();

router.post('/', async (req,res) => {
  const { word } = req.body;
  const createRecordInDB = await createRecord(word);
  res.json({response: createRecordInDB.rows, status: 'success'}).status(200);
})

module.exports = router;