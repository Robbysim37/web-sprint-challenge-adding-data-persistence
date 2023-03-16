// build your `/api/resources` router here
const router = require(`express`).Router()
const resourceModel = require(`./model`)

router.post(`/`, (req,res) => {
    resourceToPost = req.body
    resourceModel.getResources().then(resources => {

        const foundResource = resources
        .filter(el => el.resource_name === resourceToPost.resource_name)[0]
        console.log(foundResource)

        if(foundResource){
            res.status(500).json({message:"resource name already exists"})
        }else{
            resourceModel.insertResource(resourceToPost).then(response => {
                res.status(200).json(resourceToPost)
            })            
        }
    })

})

router.get(`/`, (req,res) => {
    resourceModel.getResources().then(response => {
        res.status(200).json(response)
    })
})

module.exports = router