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
      res.status(500).json(err)
    })
})

router.post("/", (req, res) => {
  actionsDB.insert(req.body)
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get("/:id/", (req, res) => {
  actionsDB.get(req.params.id)
    .then(project => {
      res.status(200).json(project)
    })
})

router.put("/:id", (req, res) => {
  actionsDB.update(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project)
    })
})

router.delete("/:id", (req, res) => {
  actionsDB.remove(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project)
    })
})

module.exports = router

