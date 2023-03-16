// build your server here and require it from index.js
const express = require("express");
const server = express()
const resourcesRouter = require(`./resource/router`)
const projectRouter = require(`./project/router`)
server.use(express.json())

//need to add routers

server.use(`/api/resources`,resourcesRouter)
server.use(`/api/projects`,projectRouter)

server.use(`*`, (req, res) => {
    res.json({message: `endpoint not found`})
})

module.exports = server