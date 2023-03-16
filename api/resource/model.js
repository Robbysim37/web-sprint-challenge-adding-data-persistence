// build your `Resource` model here
const db = require(`../../data/dbConfig`)

const getResources = async () => {
    return db("resource")
}

const insertResource = async (resource) => {
    await db("resource").insert(resource)
}

module.exports = {
    insertResource,
    getResources
}