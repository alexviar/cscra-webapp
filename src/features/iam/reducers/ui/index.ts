import { combineReducers } from "redux"
import usersPagination from "./usersPagination"
import usersFilter from "./usersFilter"

export default combineReducers({
  usersPagination,
  usersFilter
})