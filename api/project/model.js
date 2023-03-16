// build your `Project` model here
const db = require(`../../data/dbConfig`)

const getProjects = async () => {
    return db("projects")
    //figure out and do your backend shaping here
}

module.exports = {
    getProjects
}