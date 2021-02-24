import { combineReducers } from 'redux'
import { Employee } from '../state'

const initialEmployees: Employee[] = [
  {
    id: "1",
    dni: "12345678 SC",
    name: "Joaquin",
    middlename: "Chumacero",
    lastname: "Yupanqui",
    dateOfBirth: "1977-09-03",
    gender: "Masculino",
    nationality: "Boliviana",
    afp: "Futuro",
    contract: {
      type: "contrato laboral",
      startDate: "2019-09-10",
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