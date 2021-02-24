import { createSelector } from "reselect";
import { getSelectedNode, getUnits, getJobs } from "./inputs";

export const getSelectedJob = createSelector(
  getJobs,
  getSelectedNode,
  (jobs, selectedNode) => {
    if(selectedNode && selectedNode.type == "job"){
      const unit = jobs.find(u=>u.id == selectedNode.id)
      return {
        id: unit?.id,
        name: unit?.name,
        description: unit?.description,
        isManager: unit?.isManager
      }
    }
    else
      return null
  }
)