import { combineReducers } from 'redux'
import selectedWageId from './selectedWageId'
import wageForm from './wageForm'

export default combineReducers({
  selectedWageId,
  wageForm,
})