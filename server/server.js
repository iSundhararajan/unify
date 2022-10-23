import express from "express";
import db from "./models/index.js";
import responseDB from "./models/responseDb.js";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/campaigns/create', async (req, res) => {
    await db.campaigns.sync()

    let newCampaign = await db.campaigns.create({
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        authorId: req.body.authorId,
        authorName: req.body.authorName,
        uniqueId: req.body.uniqueId,
        imageLink: req.body.imageLink,
    })

    res.status(200).json(newCampaign)
})

app.post('/api/campaigns/response/create', async (req, res) => {
    console.log(req.body)
    await responseDB.responses.sync()

    let newResponse = await responseDB.responses.create({
        text: req.body.text,
        authorId: req.body.authorId,
        authorName: req.body.authorName,
        campaignId: req.body.campaignId,
        uniqueId: req.body.uniqueId,
    })

    res.status(200).json(newResponse)
})

app.get('/api/campaigns/list', async (req, res) => {
    await db.campaigns.sync()
    let allCampaigns = await db.campaigns.findAll()

    console.log(allCampaigns)

    res.status(200).json(allCampaigns)
})


app.get('/api/campaigns/response/list/:campaignId', async (req, res) => {
    let id = req.params.campaignId
    await responseDB.responses.sync()
    let allResponses = await responseDB.responses.findAll({
        where: {
            campaignId: id
        }
    })

    console.log(allResponses)

    res.status(200).json(allResponses)
})

app.get('/api/campaigns/detail/:id', async (req, res) => {
    let campaignUniqueId = req.params.id;

    let campaign = await db.campaigns.findOne({
        where: {
            id: campaignUniqueId
        }
    })

    console.log(campaign)

    res.status(200).json(campaign)

})


app.listen(5000, console.log("Server running now at port 5000"))
