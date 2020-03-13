const express = require("express")

const actionsDB = require("../data/helpers/actionModel")
const projectsDB = require("../data/helpers/projectModel")

const router = express.Router()

router.use(express.json())

router.get("/", (req, res) => {
  actionsDB.get()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your actions", err })
    })
})

router.post("/", (req, res) => {
  actionsDB.insert(req.body)
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your action", err })
    })
})

router.get("/:id/", (req, res) => {
  actionsDB.get(req.params.id)
    .then(project => {
      project.id ?
        res.status(200).json(project)
        : res.status(404).json({ message: "there was no action with this id found" })
    })
    .catch(err => {
      res.status(404).json({ message: "there was no action with this id found" })
    })
})

router.put("/:id", (req, res) => {
  actionsDB.update(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your action", err })
    })
})

router.delete("/:id", (req, res) => {
  actionsDB.remove(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong deleting your action", err })
    })
})

module.exports = router

