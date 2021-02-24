import { OrganizationAwareState } from "../state"

export const getUnits = ({organization: {entities}}: OrganizationAwareState) => entities.units//.find(u=>u.id==unit_id)
export const getJobs = ({organization: {entities}}: OrganizationAwareState) => entities.jobs//.units.find(u=>u.id==unit_id)

export const getSelectedNode = ({organization: {ui}}: OrganizationAwareState) => ui.selectedNode
export const getModal = ({organization: {ui}}: OrganizationAwareState) => ui.modal