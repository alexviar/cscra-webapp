import { combineReducers } from "redux";

import entities from './entities'
import ui from './ui'

export const payrollReducer = combineReducers({
  entities,
  ui
})

export interface PayrollAwareState {
  payrolls: ReturnType<typeof payrollReducer>
}

export default payrollReducer