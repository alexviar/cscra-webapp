import { createSelector } from "reselect";
import { getSelectedNode, getUnits, getJobs } from "./inputs";

export const getSelectedUnit = createSelector(
  getUnits,
  getJobs,
  getSelectedNode,
  (units, jobs, selectedNode) => {
    if(selectedNode && selectedNode.type == "unit"){
      const unit = units.find(u=>u.id == selectedNode.id)
      return {
        id: unit?.id,
        name: unit?.name,
        description: unit?.description,
        subunits: units.filter(u=>u.parentId == unit?.id),
        jobs: jobs.filter(u=>u.unitId == unit?.id)
      }
    }
    else
      return null
  }
)