// build your `Task` model here
const db = require("../../data/dbConfig")

const getTasks = async () => {

    const tasksArr = await db("tasks as t")
    .leftJoin(`projects as p`,`t.project_id`,`p.project_id`)

    let tasksSchema = tasksArr.map(el => {
        return {
            task_id: el.task_id,
            task_description: el.task_description,
            task_notes: el.task_notes,
            task_completed: el.task_completed ? true : false,
            project_name: el.project_name,
            project_description: el.project_description,
        }
    })
    return tasksSchema
}

const insertTask = async (task) => {
    await db("tasks").insert(task)
    const taskSchema = {
        task_id: task.project_id,
        task_description: task.task_description,
        task_notes: task.task_notes || null,
        task_completed: task.task_completed ? true : false,
        project_id: task.project_id,
    }
    return taskSchema
}

module.exports = {
    getTasks,
    insertTask,
}