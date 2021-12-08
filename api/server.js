const express = require("express");
const carRouter = require('./cars/cars-router');
const server = express();
server.use(express.json());
server.use('/api/cars', carRouter)
// DO YOUR MAGIC

module.exports = server
