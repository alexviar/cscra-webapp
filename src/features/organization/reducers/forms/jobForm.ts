
type JobForm = {
  fields: {
    id: string | null,
    name: string,
    isManager: boolean,
    description: string,
    parentId: string | null
  }
}
const initialState: JobForm = {
  fields: {
    id: null,
    name: "",
    description: "",
    isManager: false,
    parentId: null
  }
}

export function jobForm(state=initialState, action: any): JobForm {
  if(action.type == "UPDATE_JOB_FORM"){
    return {
      ...state,
      ...action.payload
    } as JobForm
  }
  return state
}