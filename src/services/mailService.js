const {MailerConfig} = require('../config');
const AppError = require('../utils/errors/appError');
const { StatusCodes } = require('http-status-codes');

async function sendMail(data){
    try {
        const response = await MailerConfig.sendMail(data);
        return response;
    } catch (error) {
        throw new AppError(['Something went wrong'], StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    sendMail
}