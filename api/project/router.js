// build your `/api/projects` router here
const router = require(`express`).Router()
const projectModel = require(`./model`)

router.get("/",(req,res) => {
    projectModel.getProjects().then(promise => {
        res.status(200).json(promise)
    })
})
router.post("/",(req,res) => {

})

module.exports = router