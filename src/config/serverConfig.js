const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    EMAIL_ADDRESS : process.env.EMAIL_ADDRESS,
    EMAIL_APP_PASSWORD : process.env.EMAIL_APP_PASSWORD,
    QUEUE_URL : process.env.QUEUE_URL,
    QUEUE_NAME : process.env.QUEUE_NAME
}
