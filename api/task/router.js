// build your `/api/tasks` router here
const router = require(`express`).Router()
const tasksModel = require(`./model`)

router.get("/", (req,res) => {
    tasksModel.getTasks().then(promise => {
        res.status(200).json(promise)
    })
})

router.post("/", (req,res) => {

})

module.exports = router