import { combineReducers } from "redux";
import { Job, OrganizationAwareState, Unit } from "../state";

const initialUnits = [
  {
    id: "1",
    name: "Unidad de Finanzas",
    parentId: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "2",
    name: "Unidad de Mercadeo",
    parentId: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "3",
    name: "Unidad de RRHH",
    parentId: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "4",
    name: "Unidad de Contabilidad",
    parentId: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]
export const units = (state: Unit[] = initialUnits, action: any): Unit[]=>{
  if(action.type == "ADD_UNIT"){
    return [
      ...state,
      action.payload
    ]
  }
  else if(action.type == "EDIT_UNIT"){
    return [
      ...state.filter(u=>u.id != action.payload.id),
      action.payload
    ].sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0)
  }
  else if(action.type == "DELETE_UNIT"){
    return state.filter(u=>u.id != action.payload)
  }
  return state
}


const initialJobs = [
  {
    id: "1",
    name: "Gerente Financiero",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    unitId: "1",
    isManager: true
  },
  {
    id: "2",
    name: "Secretearia I",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    unitId: "1",
    isManager: false
  },
  {
    id: "3",
    name: "Contador",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    unitId: "4",
    isManager: false
  },
  {
    id: "4",
    name: "Gerente de marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    unitId: "2",
    isManager: true
  },
  {
    id: "5",
    name: "Gerente de rrhh",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    unitId: "3",
    isManager: true
  }
]
export const jobs = (state: Job[] = initialJobs, action: any): Job[] => {
  if(action.type == "ADD_JOB"){
    console.log(action)
    let currentState = state
    if(action.payload.isManager){
      const currentManager = currentState.find(j=>j.isManager && j.unitId == action.payload.unitId)
      if(currentManager){
        currentState = currentState.filter(j=>j.id != currentManager.id)
        return [
          ...currentState,
          {...currentManager, isManager: false},
          action.payload
        ]
      }
    }
    return [
      ...state,
      action.payload
    ]
  }
  else if(action.type == "EDIT_JOB"){
    return [
      ...state.filter(u=>u.id != action.payload.id),
      action.payload
    ].sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0)
  }
  else if(action.type == "DELETE_JOB"){
    return state.filter(u=>u.id != action.payload)
  }
  return state
}

export default combineReducers({
  units,
  jobs
})