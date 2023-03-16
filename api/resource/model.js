// build your `Resource` model here
const db = require(`../../data/dbConfig`)

const getResources = async () => {
    return db("resources")
}

const insertResource = async (resource) => {
    await db("resources").insert(resource)
}

module.exports = {
    insertResource,
    getResources
}