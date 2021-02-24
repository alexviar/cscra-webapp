import { EmployeeAwareState } from "../state";

export const getEmployees = (state: EmployeeAwareState)=>state.employee.entities.employees
export const getEmployeeFormState = (state: EmployeeAwareState)=>state.employee.ui.employeeForm