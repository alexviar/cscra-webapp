export type Payroll = {
  id: number,
  title: string,
  startDate: string,
  endDate: string,
  typeId: number
}

export type PayrollType = {
  id: number,
  name: string,
  description: string
}

export type PayrollEntry = {
  employeeId: number,
  conceptId: number,
  amount: string,
  payrollId: number
}

export type CalculationMethod = {
  id: number,
  name: string,
  description: string
}

export interface Wage {
  id: number,
  name: string,
  inForce: boolean,
  description: string,
  payrollTypeId: number,
  calculationMethodId: number,
  formula: string,
}


export interface Deduction {
  id: number,
  name: string,
  inForce: boolean,
  description: string,
  calculationMethodId: number
  rates: {
    minimum: string,
    maximum: string,
    formula: string
  }[]
}

export type ApplicableDeduction = {
  deductionId: number,
  wageId: number
}
