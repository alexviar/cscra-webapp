import { PayrollAwareState } from "../reducers";

export const getWages =  ({payrolls: {entities}}: PayrollAwareState) => entities.wages
export const getDeductions =  ({payrolls: {entities}}: PayrollAwareState) => entities.deductions
export const getApplicableDeductions =  ({payrolls: {entities}}: PayrollAwareState) => entities.applicableDeductions
export const getPayrolls =  ({payrolls: {entities}}: PayrollAwareState) => entities.payrolls
export const getPayrollTypes =  ({payrolls: {entities}}: PayrollAwareState) => entities.payrollTypes
export const getCalculationMethods =  ({payrolls: {entities}}: PayrollAwareState) => entities.calculationMethods

export const getSelectedWageId = ({payrolls: {ui}}: PayrollAwareState) => ui.selectedWageId

export const getWageForm = ({payrolls: {ui}}: PayrollAwareState) => ui.wageForm