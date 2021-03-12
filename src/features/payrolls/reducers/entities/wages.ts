import {Wage} from '../../state'

const initialState: Wage[] = [
  {
    id: 1,
    name: "Bono de Antigüedad 2-4",
    description: "Bono de Antigüedad de 2 a 4 años",
    inForce: true,
    calculationMethodId: 1,
    formula: "SMN*3*0.05",
    payrollTypeId: 1
  },
  {
    id: 2,
    name: "Bono de Antigüedad 5-7",
    description: "Bono de Antigüedad de 5 a 7 años",
    inForce: true,
    calculationMethodId: 1,
    formula: "SMN*3*0.11",
    payrollTypeId: 1
  },
  {
    id: 3,
    name: "Bono de Antigüedad 8-10",
    description: "Bono de Antigüedad de 8 a 10 años",
    inForce: true,
    calculationMethodId: 1,
    formula: "SMN*3*0.18",
    payrollTypeId: 1
  },
  {
    id: 4,
    name: "Bono de Antigüedad 11-14",
    description: "Bono de Antigüedad de 11 a 14 años",
    inForce: true,
    calculationMethodId: 1,
    formula: "SMN*3*0.26",
    payrollTypeId: 1
  },
  {
    id: 5,
    name: "Bono de Antigüedad 15-19",
    description: "Bono de Antigüedad de 15 a 19 años",
    inForce: true,
    calculationMethodId: 1,
    formula: "SMN*3*0.34",
    payrollTypeId: 1
  },
  {
    id: 6,
    name: "Bono de Antigüedad 20-24",
    description: "Bono de Antigüedad de 15 a 19 años",
    inForce: true,
    calculationMethodId: 1,
    formula: "SMN*3*0.42",
    payrollTypeId: 1
  },
  {
    id: 7,
    name: "Bono de Antigüedad 25+",
    description: "Bono de Antigüedad de 25 o mas años",
    inForce: true,
    calculationMethodId: 1,
    formula: "SMN*3*0.50",
    payrollTypeId: 1
  }
]

export default (state: Wage[]=initialState, action: any): Wage[]=>{
  if(action.type == "ADD_WAGE_TYPE"){
    return [
      ...state,
      action.payload.wage
    ]
  }
  if(action.type == "EDIT_WAGE_TYPE"){
    const index = state.findIndex(w=>w.id == action.payload.wage.id)
    state.splice(index, 1, action.payload.wage)
    return [
      ...state
    ]
  }
  if(action.type == "DELETE_WAGE_TYPE"){
    return state.filter(w=>w.id == action.payload)
  }
  return state
}