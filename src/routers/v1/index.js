const express = require('express');
const { PingController } = require('../../controllers');
const ticketRouter = require('./ticketRouter');

const router = express.Router();

router.get('/ping', PingController.ping);

router.use('/tickets', ticketRouter)

module.exports = router