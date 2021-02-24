import { combineReducers } from 'redux'
import entities from './entities'
import ui from './ui'


export const employeeReducer = combineReducers({
  entities,
  ui
})

export type EmployeeState = ReturnType<typeof employeeReducer>

export default employeeReducer