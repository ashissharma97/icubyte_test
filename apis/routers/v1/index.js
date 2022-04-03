const express = require('express');
const createRoute = require('./create.route');
const updateRoute = require('./update.route');
const readRoute = require('./read.route');
const deleteRoute = require('./delete.route');
const healthRoute = require('./health.route');

const router = express.Router();

router.use('/health', healthRoute);
router.use('/create', createRoute);
router.use('/read', readRoute);
router.use('/update', updateRoute);
router.use('/delete', deleteRoute);

module.exports = router;