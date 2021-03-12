export default (state: number=-1, action: any): number => {
  if(action.type=="CHANGE_SELECTED_WAGE_ID"){
    return action.payload
  }
  return state
}

