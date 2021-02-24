import { EmployeeState } from "../reducers";

export type Employee = {
  id: string,
  dni: string,
  name: string,
  middlename: string,
  lastname: string
  gender: "Masculino" | "Femenino",
  dateOfBirth: string,
  nationality: "Boliviana" | "Extrangera",
  afp: string,
  contract: {
    type: string,
    startDate: string,
    jobId: string,
    salary: number
  }
}

export interface EmployeeAwareState {
  employee: EmployeeState
}