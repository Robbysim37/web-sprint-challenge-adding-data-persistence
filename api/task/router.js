// build your `/api/tasks` router here
const router = require(`express`).Router()
const tasksModel = require(`./model`)
const taskMiddleware = require(`./middleware`)

const validateProjectId = taskMiddleware.checkValidProject

router.get("/", (req,res) => {
    tasksModel.getTasks().then(promise => {
        res.status(200).json(promise)
    })
})

router.post("/",validateProjectId, (req,res) => {
    const task = req.body
    if(!task.task_description || !task.project_id){
        res.status(500).json({message: "invalid task"})
    }else{
        tasksModel.insertTask(task).then(promise => {
            res.status(200).json(promise)
        })
    }
})

module.exports = router