export default (state: {
  username?: string,
  active?: number,
  externalId?: number
}={}, action: any): {
  username?: string,
  active?: number,
  externalId?: number
} => {
  const {type, payload, error, meta} = action
  switch(type) {
    case "UPDATE_USERS_FILTER":
      return payload
  }
  return state
}