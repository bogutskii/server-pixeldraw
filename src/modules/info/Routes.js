const express = require('express');
const { getInfo } = require('./info');

const router = express.Router();

router.get('/', getInfo);

module.exports = router;
