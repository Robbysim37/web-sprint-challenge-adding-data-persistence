// build your `/api/projects` router here
const router = require(`express`).Router()
const projectModel = require(`./model`)

router.get("/",(req,res) => {
    projectModel.getProjects().then(promise => {
        res.status(200).json(promise)
    })
})
router.post("/",(req,res) => {
    projectModel.insertProject(req.body).then(promise => {
        if(promise === "taken"){
            res.status(500).json({message: "project name already exists"})
        }else{
            res.status(200).json(promise)
        }
    })
})

module.exports = router