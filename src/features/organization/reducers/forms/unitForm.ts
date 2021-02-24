
type UnitForm = {
  fields: {
    id: string | null,
    name: string,
    description: string,
    parentId: string | null
  }
}
const initialState: UnitForm = {
  fields: {
    id: null,
    name: "",
    description: "",
    parentId: null
  }
}

export function unitForm(state=initialState, action: any): UnitForm {
  if(action.type == "UPDATE_UNIT_FORM"){
    return {
      ...state,
      ...action.payload
    } as UnitForm
  }
  return state
}
