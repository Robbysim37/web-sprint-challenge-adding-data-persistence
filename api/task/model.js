// build your `Task` model here
const db = require("../../data/dbConfig")

const getTasks = async () => {
const tasksArr = await db("tasks as t")
.leftJoin(`projects as p`,`t.project_id`,`p.project_id`)


return tasksArr
}

module.exports = {
    getTasks,
}