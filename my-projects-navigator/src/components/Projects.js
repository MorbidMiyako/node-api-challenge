import React, { useEffect, useState } from "react";
import Axios from "axios"
import Project from "./Project"

export default function Projects() {

  const [content, setContent] = useState([])
  const [contentUpdate, setContentUpdate] = useState([])

  useEffect(() => {
    Axios
      .get("https://generic-node-api.herokuapp.com/api/projects")
      .then(response => {
        console.log(response)
        setContent(response.data.map(project => project)
        )
      })
      .catch(error => {
        console.log(error)
      })
  }, [contentUpdate])

  const toggleProjectCompleted = (state, id) => {
    Axios
      .put(`https://generic-node-api.herokuapp.com/api/projects/${id}`, { completed: !state })
      .then(res => {
        console.log(res)
        setContentUpdate(res)

      })
      .catch(err => {
        console.log(err)
      })
  }

  const toggleActionCompleted = (state, id) => {
    Axios
      .put(`https://generic-node-api.herokuapp.com/api/projects/${id}`, { completed: !state })
      .then(res => {
        console.log(res)
        setContentUpdate(res)

      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <p> You have the following projects</p>
      {content.map(project => (
        <Project key={project.id} project={project} toggleProjectCompleted={toggleProjectCompleted} toggleActionCompleted={toggleActionCompleted} />
      ))}
    </>
  )
}
