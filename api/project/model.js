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

const insertProject = async (project) => {
    await db("projects").insert(project)
    const projectSchema = {
        project_id: project.project_id,
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: project.project_completed ? true : false
    }
    return projectSchema
}

module.exports = {
    getProjects,
    insertProject
}