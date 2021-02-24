
type JobForm = {
  fields: {
    id: string | null,
    name: string,
    isManager: boolean,
    description: string,
    unitId: string | null
  }
}
const initialState: JobForm = {
  fields: {
    id: null,
    name: "",
    description: "",
    isManager: false,
    unitId: null
  }
}

export function jobForm(state=initialState, action: any): JobForm {
  if(action.type == "UPDATE_JOB_FORM"){
    return {
      ...state,
      ...action.payload
    } as JobForm
  }
  if(action.type == "RESET_JOB_FORM"){
    return {
      ...initialState,
      ...action.payload
    } as JobForm
  }
  return state
}