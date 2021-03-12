import { User } from "../../../auth/state"

export default (state: User[]=[], action: any): User[] => {
  const {type, payload, error, meta} = action
  switch(type){
    case "LOAD_USERS_COMPLETED":
      return error ? state : payload.records
  }
  return state
}