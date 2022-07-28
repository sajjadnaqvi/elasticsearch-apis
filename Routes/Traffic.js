const express = require('express');
const router = express.Router();

const getTraffic = require('../Tasks/GetTrafficLogs');

router.get('/traffic',getTraffic);

module.exports = router;