const CrudRepository = require('./crudRepository');

const {Ticket} = require('../models')

class TicketRepository extends CrudRepository{
    constructor(){
        super(Ticket)
    }
}

module.exports = TicketRepository;