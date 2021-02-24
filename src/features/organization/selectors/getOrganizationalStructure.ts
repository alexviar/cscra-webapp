import { TreeProps } from "rc-tree"
import { DataNode } from "rc-tree/lib/interface"
import {FaSitemap, FaBriefcase, FaBuilding, FaCaretRight, FaCaretDown} from 'react-icons/fa'
import {BsCaretRight, BsCaretDown} from 'react-icons/bs'
import {createSelector} from "reselect"
import { OrganizationAwareState, Unit, Job } from "../state"

export const getUnits = ({organization: {entities}}: OrganizationAwareState) => entities.units//.find(u=>u.id==unit_id)
export const getJobs = ({organization: {entities}}: OrganizationAwareState) => entities.jobs//.units.find(u=>u.id==unit_id)
export const getUnit = ({organization: {entities}}: OrganizationAwareState, unit_id: string) => entities.units.find(u=>u.id==unit_id)
export const getSubunits = createSelector(
  getUnits,
  (_:Unit[], unitId: string) => unitId,
  (units, unitId) =>{
    return units.filter(u=>u.parentId == unitId)
  }
)
//({organization: {entities}}: OrganizationAwareState, unit_id: string)=>entities.units.filter(u=>u.parentId == unit_id)
export const getOwnedJobs = ({organization: {entities}}: OrganizationAwareState, unit_id: string)=>entities.jobs.filter(j=>j.unitId == unit_id)

export const getRootIds = ({organization: {entities}}: OrganizationAwareState) => entities.units.filter(u=>u.parentId == null).map(u=>u.id)

export const getOrganizationalStructureTreeData = createSelector(
  getUnits,
  getJobs,
  (units: Unit[], jobs: Job[]):DataNode[] => {
    function toTreeData(parentId: string | null){
      return units.filter(u => u.parentId == parentId).map((u):DataNode=>{
        return {
          key: `unit-${u.id}`,
          title: u.name,
          icon: FaSitemap,
          //switcherIcon: BsCaretRight,
          children: [
            ...toTreeData(u.id),
            ...jobs.filter(j=>j.unitId == u.id).map((j):DataNode=>{
              return {
                key: `job-${j.id}`,
                title: j.name,
                icon: FaBriefcase,
                isLeaf: true
              }
            })
          ]
        }
      })
    }

    const treeData = toTreeData(null)
    console.log("TreeData", treeData)
    return [
      {
        key: "root",
        title: "Caja de Salud de Caminos y R.A.",
        icon: FaBuilding,
        children: treeData
      }
    ]
  }
)
