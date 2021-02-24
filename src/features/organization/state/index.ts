import {OrganizationState} from '../reducers'

export type Unit = {
  id: string,
  name: string,
  description: string,
  parentId: string | null
}

export type Job = {
  id: string,
  name: string,
  isManager: boolean,
  unitId: string
}


export interface OrganizationAwareState {
  organization: OrganizationState
}