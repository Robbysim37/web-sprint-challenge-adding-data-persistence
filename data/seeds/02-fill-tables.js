const resources = [
    {resource_name:"resource one", resource_description: "this isnt required"},
    {resource_name:"resource two"},
    {resource_name:"resource three", resource_description: "this isnt required"},
]

const projects = [
    {project_name:"project one", project_description:"not required"},
    {project_name:"project two"},
    {project_name:"project three", project_description:"not required"}
]

const tasks = [
    {task_notes:"this is notes for One",task_description:"description for One",project_id:1},
    {task_notes:"this is notes for Two",task_description:"description for Two",project_id:2},
    {task_notes:"this is notes for Three",task_description:"description for Three",project_id:3},
]

exports.seed = async function (knex) {
    await knex(`resources`).insert(resources)
    await knex(`projects`).insert(projects)
    await knex(`tasks`).insert(tasks)
    }