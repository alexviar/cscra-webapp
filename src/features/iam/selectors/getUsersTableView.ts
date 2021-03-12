import { createSelector } from "reselect";
import { getUsers } from "./inputSelectors";

export default createSelector(
  getUsers,
  (users)=>{
    return users
  }
)