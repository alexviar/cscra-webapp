export default (state: {
  completed?: boolean,
  failed?: boolean
} =  {}, action: any) => {
  const {type, payload, error, meta} = action
  switch(type){
    case "LOAD_USERS":
      return {
        completed: false
      }
    case "LOAD_USERS_COMPLETED":
      return {
        completed: true,
        failed: error
      }
    default:
      return state
  }
}