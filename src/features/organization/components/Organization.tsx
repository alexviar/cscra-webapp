import React from 'react'
import Tree, { TreeNode } from 'rc-tree'
import {FaSitemap, FaBriefcase} from 'react-icons/fa'
import './tree.css'
import UnitForm from './UnitForm'
import { UnitDetails } from './UnitDetails'
import { JobDetails } from './JobDetails'
import { OrganizationalStructureTree } from './OrganizationalStructureTree'
import { FormDialog } from './FormDialog'

export const Organization = ()=>{
  return <div style={{minWidth: 480}} className="d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1">
    <h1 style={{fontSize: "2rem"}}>Estructura Organizacional</h1>
    <div className="position-relative d-flex flex-grow-1">
      <OrganizationalStructureTree />
      <div className="p-3 border flex-grow-1"  style={{marginLeft: "11rem"}}>
        <UnitDetails />
        <JobDetails />
      </div>
    </div>
    <FormDialog></FormDialog>
  </div>
}

export default Organization