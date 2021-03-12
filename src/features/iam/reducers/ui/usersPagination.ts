export default (state: {
  total: number,
  current: number,
  size: number
}={
  total: 0,
  current: 1,
  size: 15
}, action: any): {
  total: number,
  current: number,
  size: number
} => {
  const {type, payload, error, meta} = action
  switch(type) {
    case "UPDATE_USERS_PAGINATION":
      return {
        ...state,
        ...payload
      }
    case "LOAD_USERS_COMPLETED":
      return payload.meta
  }
  return state
}