import apiClient from "../../../commons/services/apiClient"

export const PatientService = {
  findByDni: async (dni: string) =>{
    return apiClient.get(`/pacientes?carnet=${dni}`).then(({data, ...response})=>{
      return {
        ...response,
        data: data.length ? data[0] : null
      }
    })
  }
}