import deductions from './deductions'
import wages from './wages'
import payrolls from './payrolls'
import payrollEntries from './payrollEntries'
import payrollTypes from './payrollTypes'
import calculationMethods from './calculationMethods'
import applicableDeductions from './applicableDeductions'
import { combineReducers } from 'redux'

export default combineReducers({
  deductions,
  wages,
  payrolls,
  payrollEntries,
  payrollTypes,
  calculationMethods,
  applicableDeductions
})