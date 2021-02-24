import {combineReducers} from "redux"

type EmployeeFormState = {
  fields: {
    dni: string,
    dniComplement: string,
    dniIssuedAt: string,
    name: string,
    middlename: string,
    lastname: string,
    gender: string,
    dateOfBirth: string,
    nacionality: string,

    contractType: string,
    startDate: string,
    salary: string,
    unitId: string,
    jobId: string,

    afp: string
  }
}
const initialEFState: EmployeeFormState = {
  fields: {
    dni: "",
    dniComplement: "",
    dniIssuedAt: "",
    name: "",
    middlename: "",
    lastname: "",
    gender: "Masculino",
    dateOfBirth: "",
    nacionality: "Boliviana",

    contractType: "contrato laboral",
    startDate: "",
    salary: "",
    unitId: "",
    jobId: "",

    afp: ""
  }
}
function employeeForm(state: EmployeeFormState = initialEFState, action: any): EmployeeFormState{
  if(action.type == "UPDATE_EMPLOYEE_FORM"){
    return {
      ...state,
      ...action.payload
    }
  }
  if(action.type == "RESET_EMPLOYE_FORM"){
    return initialEFState
  }
  return state
}

export default combineReducers({
  employeeForm
})