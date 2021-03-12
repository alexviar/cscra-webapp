import {PayrollType} from '../../state'

const initialState: PayrollType[] = [
  {
    id: 1,
    name: "Planilla de sueldos",
    description: "Planilla de sueldos",
  },
  {
    id: 2,
    name: "Planilla de aguinaldo",
    description: "Planilla de aguinaldos",
  },
  {
    id: 3,
    name: "Planilla de retroactivo",
    description: "Planilla de retroactivos",
  }
]

export default (state: PayrollType[]=initialState, action: any): PayrollType[]=>{
  if(action.type == "ADD_PAYROLL_TYPE"){
    return [
      ...state,
      action.payload
    ]
  }
  return state
}