import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tree from 'rc-tree'
import { getOrganizationalStructureTreeData } from '../selectors/getOrganizationalStructure'
import './tree.css'
import './organization.css'
import { Item, ItemProps, Menu, Separator, Submenu, useContextMenu } from 'react-contexify'
import { FaArrowRight, FaCaretDown, FaCaretRight } from 'react-icons/fa'
import { BsCaretDown, BsCaretRight } from 'react-icons/bs'
import "react-contexify/dist/ReactContexify.css";

const MENU_ID = "ORG_STR_MENU";

export const OrganizationalStructureTree = ()=>{
  const dispatch = useDispatch()
  const { show } = useContextMenu({
    id: MENU_ID
  });
  

  const treeData = useSelector(getOrganizationalStructureTreeData)
  const hideIfRoot = useCallback<Exclude<ItemProps["hidden"], boolean | undefined>>(({props})=>props.nodeId == "root", [])

  return <>
    <Tree className="os-tree position-absolute border"
      switcherIcon={(props)=> props.data?.children ? (props.expanded ? <BsCaretDown/>: <BsCaretRight/>) : undefined}
      draggable 
      treeData={treeData}
      defaultExpandedKeys={["root"]}
      multiple={false}
      onSelect={(selectedKeys)=>{
        if(selectedKeys.length){
          const [type, id] = (selectedKeys[0] as String).split("-")
          dispatch({
            type: "UPDATE_SELECTED_NODE",
            payload: { id, type } 
          })
        }
        else{
          dispatch({
            type: "UPDATE_SELECTED_NODE",
            payload: null
          })
        }
      }}
      onRightClick={(e)=>{
        show(e.event, {
          props: {
            nodeId: e.node.key,
            isLeaf: e.node.isLeaf
          }
        })
      }}
    />
    <Menu id={MENU_ID}>
      <Submenu hidden={({props})=>{
        return props.isLeaf
      }} label="Crear" arrow={<BsCaretRight/>}>
        <Item onClick={function({props}){
          const [target, id] = props.nodeId == "root" ? [null, null] : props.nodeId.split("-")
          dispatch({
            type: "PREPARE_NEW_UNIT_FORM",
            payload: {
              parentId: id,
            }
          })
        }}>
          Unidad
        </Item>
        <Item onClick={function({props}){
          const [target, id] = props.nodeId == "root" ? [null, null] : props.nodeId.split("-")
          dispatch({
            type: "PREPARE_NEW_JOB_FORM",
            payload: {
              unitId: id,
            }
          })
        }}>Cargo</Item>
      </Submenu>
      <Item hidden={hideIfRoot} onClick={function({props}){
          const [target, id] = props.nodeId.split("-")
          dispatch({
            type: target == 'unit' ? "PREPARE_UNIT_FORM" : "PREPARE_JOB_FORM",
            payload: {
              id
            }
          })
        }}>
        Editar
      </Item>
      <Item hidden={hideIfRoot} onClick={function({props}){
        const [target, id] = props.nodeId.split("-")
        // if(confirm("¿Está seguro de eliminar? Esta accion es irreversible")){
          dispatch({
            type: target == "unit" ? "DELETE_UNIT" : "DELETE_JOB",
            payload: id
          })
        // }
      }}>
        Eliminar
      </Item>
    </Menu>
  </>
}