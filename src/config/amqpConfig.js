const amqplib = require('amqplib');
const ServerConfig = require('./serverConfig');
const { MailService } = require('../services');

let channel, connection;

async function connectQueue() {
    try {
        connection = await amqplib.connect(ServerConfig.QUEUE_URL);
        channel = await connection.createChannel();
        await channel.assertQueue(ServerConfig.QUEUE_NAME);

        // Auto-start consuming after successful connection
        await consumeData();
        console.log('Started consuming messages from queue');
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function consumeData() {
    try {
        await channel.consume(ServerConfig.QUEUE_NAME, async (msg) => {
            if (msg !== null) {
                const data = JSON.parse(msg.content.toString());
                console.log("Received data:", data);
                await MailService.sendMail(ServerConfig.EMAIL_ADDRESS, data.email, data.subject, data.text);
                channel.ack(msg);
            }
        });
    } catch(error) {
        console.log("queue error", error);
        throw error;
    }
}

module.exports = {
    connectQueue,
    consumeData
}