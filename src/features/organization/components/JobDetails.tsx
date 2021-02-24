import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getSelectedJob } from '../selectors/getSelectedJob'

export const JobDetails = ()=>{
  const job = useSelector(getSelectedJob)
  console.log(job)

  return job ? <div>
    <h2 style={{fontSize: "1.75rem"}}>{job.name}</h2>
    <p>{job.description}</p>
    <span>Es administrador: {job.isManager ? "Sí" : "No"}</span>
  </div> : null
}