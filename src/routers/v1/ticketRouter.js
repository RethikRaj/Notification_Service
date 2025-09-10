const express = require('express');
const { TicketMiddlewares } = require('../../middlewares');
const { TicketController } = require('../../controllers');

const router = express.Router();

router.post('/', TicketMiddlewares.validateCreateTicket, TicketController.createTicket);

module.exports = router;