const AppError = require('../utils/errors/appError');
const {TicketRepository} = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const ticketRepository = new TicketRepository();

async function createTicket(data){
    try {
        const ticket = await ticketRepository.create(data);
        return ticket;
    } catch (error) {
        throw new AppError(['Something went wrong'], StatusCodes.INTERNAL_SERVER_ERROR);   
    }
}

module.exports ={
    createTicket
}