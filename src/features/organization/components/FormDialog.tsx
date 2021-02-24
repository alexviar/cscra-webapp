import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getModal } from '../selectors/inputs'
import UnitForm from './UnitForm'
import JobForm from './JobForm'

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
        target == 'unit' ? <UnitForm /> :
        target == 'job' ? <JobForm /> :
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
      <Button variant="primary" form={target == 'unit' ? 'unit-form' : 'job-form'} type="submit">
        Guardar
      </Button>
    </Modal.Footer>
  </Modal>
}