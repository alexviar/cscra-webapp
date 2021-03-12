import {ApplicableDeduction} from '../../state'

const initialState: ApplicableDeduction[] = []

export default (state: ApplicableDeduction[]=initialState, action: any): ApplicableDeduction[]=>{
  if(action.type == "ADD_WAGE_TYPE"){
    const {applicableDeductions, wage} = action.payload
    return [
      ...state,
      ...applicableDeductions
    ]
  }
  if(action.type == "EDIT_WAGE_TYPE"){
    const {applicableDeductions, wage} = action.payload
    return [
      ...state.filter(ad => ad.wageId != wage.id),
      ...applicableDeductions
    ]
  }
  return state
}