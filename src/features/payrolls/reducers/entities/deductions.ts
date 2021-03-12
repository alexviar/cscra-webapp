import {Deduction} from '../../state'

const initialState: Deduction[] = [
  {
    id: 1,
    name: "Cotización Mensual + Comisión",
    description: "",
    calculationMethodId: 1,
    inForce: true,
    rates: [
      {
        minimum: '0',
        maximum: '',
        formula: '%base_imponible%*0.105'
      }
    ]
  },
  {
    id: 2,
    name: "Aporte solidario asegurado",
    description: "",
    calculationMethodId: 1,
    inForce: true,
    rates: [
      {
        minimum: '0',
        maximum: '',
        formula: '%base_imponible%*0.005'
      }
    ]
  },
  {
    id: 3,
    name: "Cotización adicional",
    description: "",
    calculationMethodId: 2,
    inForce: true,
    rates: []
  },
  {
    id: 4,
    name: "Prima riesgo comun",
    description: "",
    calculationMethodId: 1,
    inForce: true,
    rates: [
      {
        minimum: '0',
        maximum: '',
        formula: '%base_imponible%*0.0171'
      }
    ]
  },
  {
    id: 5,
    name: "Prima riesgo laboral",
    description: "",
    calculationMethodId: 2,
    inForce: true,
    rates: [
      {
        minimum: '0',
        maximum: '',
        formula: '%base_imponible% * 0.0171'
      }
    ]
  },
  {
    id: 6,
    name: "Aporte Nacional Solidario",
    description: "",
    calculationMethodId: 2,
    inForce: true,
    rates: [
      {
        minimum: '13000',
        maximum: '',
        formula: '%base_imponible% * 0.01'
      },
      {
        minimum: '25000',
        maximum: '',
        formula: '%base_imponible% * 0.05'
      },
      {
        minimum: '35000',
        maximum: '',
        formula: '%base_imponible% * 0.1'
      }
    ]
  }
]

export default (state: Deduction[]=initialState, action: any): Deduction[]=>{
  if(action.type == "ADD_DEDUCTION_TYPE"){
    return [
      ...state,
      action.payload
    ]
  }
  return state
}