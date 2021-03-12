
type WageFormState = {
  fields: {
    name: string,
    description: string,
    payrollTypeId: string,
    inForce: boolean,
    calculationMethodId: string,
    formula: string,
    applicableDeductionIds: number[] 
  },
  info: {
    name: string,
    description: string,
    payrollTypeId: string,
    inForce: string,
    calculationMethodId: string,
    formula: string,
    applicableDeductionIds: string
  }
}

const initialState: WageFormState = {
  fields: {
    name: "",
    description: "",
    payrollTypeId: "",
    inForce: true,
    calculationMethodId: "",
    formula: "",
    applicableDeductionIds: []
  },
  info: {
    name: "",
    description: "",
    payrollTypeId: "",
    inForce: "",
    calculationMethodId: "",
    formula: "",
    applicableDeductionIds: ""
  }
}
export default (state: WageFormState=initialState, action: any): WageFormState => {
  if(action.type=="UPDATE_WAGE_FORM"){
    return {
      ...state,
      ...action.payload
    }
  }
  if(action.type=="RESET_WAGE_FORM"){
    return initialState
  }
  return state
}

