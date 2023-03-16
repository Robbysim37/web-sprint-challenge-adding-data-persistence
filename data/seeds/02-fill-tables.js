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

exports.seed = async function (knex) {
    await knex(`resources`).insert(resources)
    await knex(`projects`).insert(projects)
    }