const MailerConfig = require('../config/mailerConfig');
const AppError = require('../utils/errors/appError');
const { StatusCodes } = require('http-status-codes');

async function sendMail(mailFrom, mailTo, subject, text){
    try {
        const response = await MailerConfig.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: subject,
            text: text
        });
        return response;
    } catch (error) {
        // throw new AppError(['Something went wrong'], StatusCodes.INTERNAL_SERVER_ERROR);
        console.log(error);
    }
}

module.exports = {
    sendMail
}