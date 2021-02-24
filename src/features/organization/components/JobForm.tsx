import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Form } from 'react-bootstrap'
import { OrganizationAwareState } from '../state'
import { v4 as uuidv4 } from 'uuid'

export const JobForm = () => {
  const dispatch = useDispatch()
  const {fields} = useSelector((state:OrganizationAwareState)=>state.organization.ui.jobForm)
  console.log("Fields", fields)
  return <Form id="job-form" onSubmit={(e)=>{
    e.preventDefault()
    if(fields.id){
      dispatch({
        type: "EDIT_JOB",
        payload: {
          id: fields.id,
          name: fields.name,
          description: fields.description,
          unitId: fields.parentId
        }
      })
    }
    else{
      dispatch({
        type: "ADD_JOB",
        payload: {
          id: uuidv4(),
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
    <Form.Group controlId="name">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" value={fields.name} onChange={(e)=>{
        const value = e.target.value
        dispatch({
          type: "UPDATE_JOB_FORM",
          payload: {
            fields: {
              ...fields,
              name: value
            }
          }
        })
      }}/>
    </Form.Group>
    <Form.Group controlId="description">
      <Form.Label>Descripción</Form.Label>
      <Form.Control as="textarea" value={fields.description}  onChange={(e)=>{
        const value = e.target.value
        dispatch({
          type: "UPDATE_JOB_FORM",
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

export default JobForm