import express from "express";
import db from "./models/index.js";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/campaigns/create', async (req, res) => {
    // console.log(req.body)
    await db.campaigns.sync()

    let newCampaign = await db.campaigns.create({
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        authorId: req.body.authorId,
        authorName: req.body.authorName,
        uniqueId: req.body.uniqueId,
    })

    res.status(200).json(newCampaign)
})

app.get('/api/campaigns/list', async (req, res) => {
    let allCampaigns = await db.campaigns.findAll()

    console.log(allCampaigns)

    res.status(200).json(allCampaigns)
})


app.get('/api/testcreate', async(req, res)=> {
    await db.campaigns.sync()
    let newCampaign = await db.campaigns.create({
        title: "title",
        description: "desc",
        authorId: "jkks",
        authorName: "jacke",
        uniqueId: "hshsjsksks",
        tags: "tags1, tags2"
    })

    console.log(newCampaign)

    res.status(200).send(newCampaign)
})

app.listen(5000, console.log("Server running now at port 5000"))
