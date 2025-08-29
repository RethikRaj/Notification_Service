const nodemailer = require('nodemailer');

const { EMAIL_ADDRESS , EMAIL_APP_PASSWORD} = require('./serverConfig');

const mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth : {
        user : EMAIL_ADDRESS,
        pass : EMAIL_APP_PASSWORD 
    }
});

module.exports = mailTransporter;