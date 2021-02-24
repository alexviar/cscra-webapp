import { createSelector } from "reselect";
import { getJobs, getUnits } from "../../organization/selectors/inputs";
import { getEmployees } from "./inputs";


export const getEmployeeTableView = createSelector(
  getEmployees,
  getUnits,
  getJobs,
  (employees, jobs, units)=>{
    return employees.map(employee => {
      const job = jobs.find(job => job.id == employee.contract.jobId)
      return {
        id: employee.id,
        dni: employee.dni,
        fullName: `${employee.lastname} ${employee.middlename} ${employee.name}`,
        gender: employee.gender,
        dateOfBirth: employee.dateOfBirth,
        nationality: employee.nationality,
        afp: employee.afp,
        contract: {
          type: employee.contract.type,
          startDate: employee.contract.startDate,
          job: {
            name: job?.name,
            unit: units.find(u => u.id == employee.contract.jobId),
          },
          salary: (employee.contract.salary/100).toFixed(2)
        }

      }
    })
  }
)

