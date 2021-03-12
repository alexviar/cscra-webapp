export type ExternalTransfer = {
  patientId: number,
  doctorId: number,
  providerId: number,
  requiredServices: {
    serviceId: number,
    note: string
  }[]
}