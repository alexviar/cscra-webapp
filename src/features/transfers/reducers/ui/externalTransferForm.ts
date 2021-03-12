import { FormState } from "../../../../commons/types"

const initialState: FormState<{
  patientCard: string,
  patientFullName: string,
  patientTerminationDate: string,
  patientEmployer: string,
  patientEmployerStatus: string,
  doctorId: string,
  providerId: string,
  requiredServices: {
    serviceId: string,
    note: string
  }[]
}> = {
  fields: {
    patientCard: "",
    patientFullName: "",
    patientTerminationDate: "",
    patientEmployer: "",
    patientEmployerStatus: "",
    doctorId: "",
    providerId: "",
    requiredServices: []
  },
  errors: {},
  messages: {}
}
export default (state=initialState, action:any)=>{
  const {type, payload, error, meta} = action
  switch(type){
    case "UPDATE_EXTERNAL_TRANSFER_FORM":{
      return {
        ...state,
        ...payload
      }
    }
  }
  return state
}