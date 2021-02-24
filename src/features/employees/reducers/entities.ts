import { combineReducers } from 'redux'
import { Employee } from '../state'

const initialEmployees: Employee[] = [
  {
    id: "1",
    dni: "12345678",
    name: "Joaquin",
    middlename: "Chumacero",
    lastname: "Yupanqui",
    dateOfBirth: "03/09/77",
    gender: "Masculino",
    nationality: "Boliviana",
    afp: "AFP Futuro",
    contract: {
      type: "contrato laboral",
      startDate: "04/09/19",
      jobId: "1",
      salary: 500000
    }
  }
]
export function employees(state: Employee[]=initialEmployees, action: any){
  console.log(action)
  if(action.type == "ADD_EMPLOYEE"){
    return [
      ...state,
      action.payload
    ]
  }
  return state
}

export default combineReducers({
  employees
})