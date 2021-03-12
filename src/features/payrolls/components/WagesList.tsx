import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Item, Menu, useContextMenu } from 'react-contexify'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { getWages } from '../selectors/inputSelectors'

const MENU_ID = "WG_LS_MENU"
export const WagesList = ()=>{
  const wages = useSelector(getWages)
  const dispatch = useDispatch()
  const { show } = useContextMenu({
    id: MENU_ID
  });
  const history = useHistory()
  const { path, url } = useRouteMatch()

  return <>
    <ListGroup className="flex-grow-1"  variant="flush" onContextMenu={(e: any)=>{
      show(e, {
        props: { id: null}
      })
    }}>
      {wages.map(w=>{
        return <ListGroup.Item key={w.id} className="py-2 px-3" href={`#${w.id}`} action onContextMenu={(e)=>{
          e.stopPropagation()
          show(e, {
            props: {
              id: w.id
            }
          })
        }} >
          {w.name}
        </ListGroup.Item>
      })}
    </ListGroup>
    <Menu id={MENU_ID}>
      <Item hidden={({props})=>props.id} onClick={function({props}){
          history.push(`${url}/crear`, {})
        }}>
        Crear
      </Item>
      <Item hidden={({props})=>!props.id} onClick={function({props}){
          const id = props.id
          history.push(`${url}/editar/${id}`, {})
        }}>
        Editar
      </Item>
      <Item hidden={({props})=>!props.id} onClick={function({props}){
        const id = props.id
        // if(confirm("¿Está seguro de eliminar? Esta accion es irreversible")){
          dispatch({
            type: "DELETE_WAGE_TYPE",
            payload: id
          })
        // }
      }}>
        Eliminar
      </Item>
    </Menu>
  </>
}