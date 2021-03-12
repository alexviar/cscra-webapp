import {CalculationMethod} from '../../state'

const initialState: CalculationMethod[] = [
  {
    id: 1,
    name: "Fórmula",
    description: "Calculado mediante formula"//"Para percepciones que son de una cantidad fijas. Ejemplo: Bono desayuno: Bs 300.00",
  },
  // {
  //   id: 2,
  //   name: "Porcentual",
  //   description: "Para percepciones que son un porcentaje del haber básico. Ejemplo: Categoria profesional: 10%",
  // },
  {
    id: 2,
    name: "Manual",
    description: "No es calculado automaticamente",
  },
  {
    id: 3,
    name: "Sistema",
    description: "Calculado internamente"
  },
  {
    id: 4,
    name: "Definido por el usuario",
    description: "Debe ser definido por cada usuario"
  }

]

export default (state: CalculationMethod[]=initialState, action: any): CalculationMethod[]=>{
  if(action.type == "ADD_CALCULATION_METHOD"){
    return [
      ...state,
      action.payload
    ]
  }
  return state
}