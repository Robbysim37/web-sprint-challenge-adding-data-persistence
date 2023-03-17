const db = require("../../data/dbConfig")

const checkValidProject = async (req,res,next) => {
    const projectArr = await db("projects")
    if(req.body.project_id <= projectArr.length){
        next()
    }else{
        res.status(500).json({message: "project does not exist"})
    }
}

module.exports = {
    checkValidProject
}