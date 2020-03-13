const express = require("express")

const actionsDB = require("../data/helpers/actionModel")
const projectsDB = require("../data/helpers/projectModel")

const router = express.Router()

router.use(express.json())

router.get("/", (req, res) => {
  projectsDB.get()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your projects", err })
    })
})

router.post("/", (req, res) => {
  projectsDB.insert(req.body)
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your project", err })
    })
})

router.get("/:id/", (req, res) => {
  projectsDB.get(req.params.id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your project", err })
    })
})

router.put("/:id", (req, res) => {
  projectsDB.update(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your project", err })
    })
})

router.delete("/:id", (req, res) => {
  projectsDB.remove(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong deleting your project", err })
    })
})

router.get("/:id/actions", (req, res) => {
  projectsDB.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your project actions", err })
    })
})

module.exports = router
