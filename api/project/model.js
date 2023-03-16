// build your `Project` model here
const db = require(`../../data/dbConfig`)

const getProjects = async () => {
    const projectsArr = await db("projects")
    let projectSchema = projectsArr.map(el => {
        return {
            project_id: el.project_id,
            project_name: el.project_name,
            project_description: el.project_description,
            project_completed: el.project_completed ? true : false
        }
    });
    return projectSchema
}

module.exports = {
    getProjects
}