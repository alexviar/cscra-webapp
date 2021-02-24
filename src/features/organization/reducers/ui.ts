import { combineReducers } from "redux"
import { unitForm } from "./forms/unitForm"
import { jobForm } from "./forms/jobForm"

export function selectedNode(state=null, action: any){
  if(action.type == "UPDATE_SELECTED_NODE"){
    console.log(action.payload)
    return action.payload
  }
  return state
}

type ModalState = {
  show: boolean,
  target?: "unit" | "job",
  id?: string | null,
}
export function modal(state={show: false}, action: any): ModalState{
  if(action.type == "SHOW_MODAL"){
    return action.payload
  }
  return state
}

export default combineReducers({
  selectedNode,
  modal,
  unitForm,
  jobForm
})