const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'))

// Get all data of all projects
router.use('/projects', require('./projects'))

module.exports = router;