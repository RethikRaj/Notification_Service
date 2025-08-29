const express = require('express');
const { ServerConfig , Logger} = require('./config'); // ./config/index.js == ./config
const apiRoutes = require('./routers')

const app = express();

// adding middlewares to parse input
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    Logger.info('Succesfully started the server')
})