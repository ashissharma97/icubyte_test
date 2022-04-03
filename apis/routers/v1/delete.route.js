const express = require('express');
const { deleteRecord } = require('../../controllers/delete.controller')
const router = express.Router();

router.delete('/', async (req, res) => {
  const { id } = req.body;
  const deleteResp = await deleteRecord(id)
  res.json(deleteResp.rows).status(200);
})

module.exports = router;