import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Form } from 'react-bootstrap'
import { OrganizationAwareState } from '../state'
import { v4 as uuidv4 } from 'uuid';

export const UnitForm = () => {
  const dispatch = useDispatch()
  const {fields} = useSelector((state:OrganizationAwareState)=>state.organization.ui.unitForm)
  
  return <Form id="unit-form" onSubmit={(e)=>{
    e.preventDefault()
    if(fields.id){
      dispatch({
        type: "EDIT_UNIT",
        payload: {
          id: fields.id,
          name: fields.name,
          description: fields.description,
          parentId: fields.parentId
        }
      })
    }
    else{
      dispatch({
        type: "ADD_UNIT",
        payload: {
          id: uuidv4().replaceAll("-", ""),
          name: fields.name,
          description: fields.description,
          parentId: fields.parentId
        }
      })
    }

    dispatch({
      type: "SHOW_MODAL",
      payload: {
        show: false
      }
    })
  }}>
    <Form.Group controlId="doctor">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" value={fields.name} onChange={(e)=>{
        const value = e.target.value
        dispatch({
          type: "UPDATE_UNIT_FORM",
          payload: {
            fields: {
              ...fields,
              name: value
            }
          }
        })
      }}/>
    </Form.Group>
    <Form.Group controlId="doctor">
      <Form.Label>Descripción</Form.Label>
      <Form.Control as="textarea" value={fields.description}  onChange={(e)=>{
        const value = e.target.value
        dispatch({
          type: "UPDATE_UNIT_FORM",
          payload: {
            fields: {
              ...fields,
              description: value
            }
          }
        })
      }}/>
    </Form.Group>
      
  </Form>
}

export default UnitForm