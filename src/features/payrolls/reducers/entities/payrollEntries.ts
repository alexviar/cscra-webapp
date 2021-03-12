import {PayrollEntry} from '../../state'

const initialState: PayrollEntry[] = []

export default (state: PayrollEntry[]=initialState, action: any): PayrollEntry[]=>{
  if(action.type == "ADD_PAYROLL_ENTRY"){
    return [
      ...state,
      action.payload
    ]
  }
  return state
}