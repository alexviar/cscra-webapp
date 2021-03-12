import { createSelector } from "reselect";
import applicableDeductions from "../reducers/entities/applicableDeductions";
import { getSelectedWageId, getWages, getDeductions, getApplicableDeductions, getPayrollTypes, getCalculationMethods } from "./inputSelectors";

export const getSelectedWage = createSelector(
  getWages,
  getDeductions,
  getApplicableDeductions,
  getPayrollTypes,
  getSelectedWageId,
  (wages, deductions, applicableDeductions, payrollTypes, selectedWageId) => {
    const selectedWage = wages.find(w=>w.id == selectedWageId)
    return selectedWage && {
      id: selectedWage?.id,
      name: selectedWage?.name,
      description: selectedWage?.description,
      inForce: selectedWage?.inForce,
      payrollType: payrollTypes.find(t=>t.id == selectedWage?.payrollTypeId)!,
      applicableDeductions: deductions.filter(d=>{
        return applicableDeductions.some(ad => ad.wageId == selectedWage?.id && ad.deductionId == d.id)
      })
    }
  }
)

export const makeGetWageById = (wageId: number)=>{
  return createSelector(
    getWages,
    getDeductions,
    getApplicableDeductions,
    getCalculationMethods,
    getPayrollTypes,
    (wages, deductions, applicableDeductions, calculationMethods, payrollTypes) => {
      const selectedWage = wages.find(w=>w.id == wageId)
      console.log("Selected Wage", selectedWage)
      return selectedWage && {
        id: selectedWage?.id,
        name: selectedWage?.name,
        description: selectedWage?.description,
        inForce: selectedWage?.inForce,
        formula: selectedWage?.formula,
        payrollType: payrollTypes.find(t=>t.id == selectedWage?.payrollTypeId),
        calculationMethod: calculationMethods.find(c=>c.id == selectedWage?.calculationMethodId),
        applicableDeductions: deductions.filter(d=>{
          return applicableDeductions.some(ad => ad.wageId == selectedWage?.id && ad.deductionId == d.id)
        })
      }
    }
  )
}