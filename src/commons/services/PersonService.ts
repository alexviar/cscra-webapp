import { Person } from "../types"
import apiClient from "./apiClient"

export const PersonService = {
  findByDni: (dni: number, dniComplement: string) =>{
    return apiClient.get<Person>('/persons', {
      params:{
        filter: {
          dni_number: dni,
          dni_complement: dniComplement
        },
        first: true
      }
    })
  },
  register: (person: Person) => {
    const {
      dniNumber, 
      dniComplement,
      dniIssuedAt,
      dateOfBirth,
      ...rest
    } = person
    return apiClient.post<Person>('persons', {
      dni_number: dniNumber,
      dni_complement: dniComplement,
      dni_issued_at: dniIssuedAt,
      date_of_birth: dateOfBirth,
      ...rest
    })
  }
}
