import { combineReducers } from "redux";
import entities from "./entities"
import ui from "./ui"

const TransfersModuleReducer = combineReducers({
  entities,
  ui
})

export interface TransfersModuleAwareState{
  transfers: ReturnType<typeof TransfersModuleReducer>
}
export default TransfersModuleReducer