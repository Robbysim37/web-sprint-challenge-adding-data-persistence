// build your `/api/resources` router here
const router = require(`express`).Router()
const resourceModel = require(`./model`)

router.post(`/`, (req,res) => {
    resourceModel.insertResource(req.body).then(response => {
        res.status(200).json(req.body)
    })
})

router.get(`/`, (req,res) => {
    resourceModel.getResources().then(response => {
        res.status(200).json(response)
    })
})

module.exports = router