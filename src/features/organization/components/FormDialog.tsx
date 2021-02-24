import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getModal } from '../selectors/inputs'
import UnitForm from './UnitForm'

export const FormDialog = ()=>{
  const dispatch = useDispatch()
  const {show, target, id} = useSelector(getModal)

  return <Modal centered show={show} onHide={()=>{
    dispatch({
      type: "SHOW_MODAL",
      payload: {
        show: false
      }
    })
  }}>
    <Modal.Header closeButton>
      <Modal.Title>{`${id != null ? "Editar" : "Crear"}`}<span>{target == 'unit' ? " Unidad" : " Puesto de Trabajo"}</span></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {
      target == 'unit' ? 
        <UnitForm /> :
        target == 'job' ?
          null :
          null
      }
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={()=>{
        dispatch({
          type: "SHOW_MODAL",
          payload: {
            show: false
          }
        })
      }}>
        Cancelar
      </Button>
      <Button variant="primary" form="unit-form" type="submit">
        Guardar
      </Button>
    </Modal.Footer>
  </Modal>
}