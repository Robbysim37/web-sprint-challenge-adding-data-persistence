// build your server here and require it from index.js
const express = require("express");
const server = express()
const resourcesRouter = require(`./resource/router`)

//need to add routers

server.use(`/api/resources`,resourcesRouter)

server.use(express.json())

module.exports = server