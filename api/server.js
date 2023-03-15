// build your server here and require it from index.js
const express = require("express");

const server = express()

//need to add routers

server.use(express.json())

module.exports = server