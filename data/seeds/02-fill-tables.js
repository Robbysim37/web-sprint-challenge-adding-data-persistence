const resources = [
    {resource_name:"resource one", resource_description: "this isnt required"},
    {resource_name:"resource two"},
    {resource_name:"resource three", resource_description: "this isnt required"},
]

exports.seed = async function (knex) {
    await knex(`resource`).insert(resources)
    }