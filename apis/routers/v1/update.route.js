const express = require('express');
const { updateRecord } = require('../../controllers/update.controller');
const router = express.Router();

router.put('/', async (req, res) => {
  const { word, id } = req.body;
  const createResp = await updateRecord(word, id);
  res.json(createResp.rows).status(200);
})

module.exports = router;