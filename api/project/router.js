// build your `/api/projects` router here
const router = require(`express`).Router()
const projectModel = require(`./model`)

router.get("/",(req,res) => {
    projectModel.getProjects().then(promise => {
        res.status(200).json(promise)
    })
})
router.post("/",(req,res) => {
    if(!req.body.project_name){
        res.status(500).json({message: "Project requires a name"})
    }else{
        projectModel.insertProject(req.body).then(promise => {
            res.status(200).json(promise)
        })        
    }
})

module.exports = router