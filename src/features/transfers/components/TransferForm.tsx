import React, { useCallback, useState, useEffect, useRef} from 'react';
import { Form, Button, Table, FormControlProps, Spinner, Modal, Alert } from 'react-bootstrap'
import { FaMinus as FaTrash, FaPlus } from 'react-icons/fa'
import PacientFieldset from './PacientFieldset'
import { PDFViewer } from './../../../commons/components'
import {useFetch} from'./../../../commons/hooks'
import {baseUrl} from './../../../configs/app.json'
import apiClient from '../../../commons/services/apiClient';
import { useMutation } from 'react-query';

type Doctor = {
  id: number,
  nombre: string,
}
type Proveedor = {
  id: number,
  nombre: string,
  servicios: {
    id: number,
  }[]
}
type Servicio = {
  id: number,
  nombre: string,
}

type FormState = {
  paciente: {
    id: number,
    carnet: string,
    nombre: string,
    fechaExt: string,
    estado: number,
    empresa: {
      nombre: string,
      estado: number
    }
  },
  doctor: {
    id: number,
    nombre: string,
  },
  proveedor: {
    id: number,
    nombre: string,
    servicios: {
      id: number
    }[]
  },
  servicios: {
    id: number,
    nombre: string,
    nota: string
  }[]
}

function TransferenciaExternaForm() {
  const [formState, updateForm] = useState<FormState>({
    paciente: {
      id: 0,
      carnet: "",
      nombre: "",
      fechaExt: "",
      estado: -1,
      empresa: {
        nombre: "",
        estado: -1
      },
    },
    doctor: {
      id: 0,
      nombre: "",
    },
    proveedor: {
      id: 0,
      nombre: "",
      servicios: []
    },
    servicios: []
  })

  const [dialogVisible, showDialog] = useState(false)

  const [servicioSolicitado, updateServiciosSolicitado] = useState({
    id: 0,
    nota: ""
  })

  const onChangeDoctor = useCallback<NonNullable<FormControlProps["onChange"]>>((e)=>{
    updateForm({
      ...formState,
      doctor: doctores.find(doctor=>doctor.id == parseInt(e.target.value)) || {id: 0, nombre: ""}
    })
  }, [formState])

  const onChangeProveedor = useCallback<NonNullable<FormControlProps["onChange"]>>((e)=>{
    updateForm({
      ...formState,
      proveedor: proveedores.find(proveedor=>proveedor.id == parseInt(e.target.value)) || {id: 0, nombre: "", servicios: []}
    })
  }, [formState])

  const a = useRef(Math.random())
  console.log("Random", a)

  // const [stateOfSubmit, submit] = useFetch(()=>{
  //   return fetch(baseUrl+"/transferencias", {
  //     // credentials: 'include',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "paciente_id": formState.paciente.id,
  //       "doctor_id": formState.doctor.id,
  //       "proveedor_id": formState.proveedor.id,
  //       "servicios_ids": formState.servicios.map((servicio)=>servicio.id)
  //     })
  //   })
  // }, [formState])
  const {
    data: submitResponse,
    error: submitError,
    isLoading,
    mutate: submit
  } = useMutation((transfer:any)=>apiClient.post('/transferencias', transfer))

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    submit({
      "paciente_id": formState.paciente.id,
      "doctor_id": formState.doctor.id,
      "proveedor_id": formState.proveedor.id,
      "servicios_ids": formState.servicios.map((servicio)=>servicio.id)
    })
  }, [formState])

  const [stateOfLoadInitData, loadData] = useFetch(()=>{
    return Promise.all([
      fetch(baseUrl + "/doctores"),
      fetch(baseUrl + "/proveedores"),
      fetch(baseUrl + "/servicios")
    ])
  }, [])
  const [doctores, proveedores, servicios] = (stateOfLoadInitData.data || [[],[],[]]) as [Doctor[], Proveedor[],Servicio[]]

  const [proveedoresAdecuados, updateProveedoresAdecuados] = useState(proveedores)
  const [serviciosDisponibles, updateServiciosDisponibles] = useState(servicios)
  
  useEffect(()=>loadData(), [])
  useEffect(()=>{
    if(stateOfLoadInitData.completed && !stateOfLoadInitData.error){
      const nuevosProveedores = proveedores.filter(proveedor=>{
        return formState.servicios.every(rs => {
          return proveedor.servicios.some(ps => ps.id ==rs.id)
        })
      })
      updateProveedoresAdecuados(
        nuevosProveedores
      )
      if(!nuevosProveedores.some(np => np.id == formState.proveedor.id)){
        updateForm({
          ...formState,
          proveedor: {
            id: 0,
            nombre: "",
            servicios: []
          }
        })
      }
      if(nuevosProveedores.length == 1){
        updateForm({
          ...formState,
          proveedor: nuevosProveedores[0]
        })
      }
      const serviciosDisponibles = servicios.filter(as=>{
        return nuevosProveedores.some(proveedor => {
          return !formState.servicios.some(rs => rs.id ==as.id) && proveedor.servicios.some(ps => ps.id == as.id)
        })
      })
      updateServiciosDisponibles(serviciosDisponibles)
    }
  }, [formState.servicios, stateOfLoadInitData])


  useEffect(()=>{
    if(submitResponse?.data){
      showDialog(true)
    }
  }, [submitResponse])

  const renderServicios = ()=>{
    return formState.servicios.map((value, index)=>(
      <tr>
        <td>{index+1}</td>
        <td>{value.nombre}</td>
        <td>{value.nota}</td>
        <td><Button variant="link" onClick={()=>{
          updateForm({
            ...formState,
            servicios: formState.servicios.filter((v, i)=>index != i)
          })
        }} className="btn-icon"><FaTrash /></Button></td>
      </tr>
    ))
  }

  const renderPdf = () => {
    const url = submitResponse?.data && submitResponse?.data.url
    if(url)
      return url ? <PDFViewer url={url} height={400}></PDFViewer> : null
    else{
      // return <p>{JSON.stringify(stateOfSubmit.data)}</p>
      return <Alert variant="danger" >
        <p>{submitResponse?.data?.message}</p>
        <p>{JSON.stringify(submitResponse?.data?.errors)}</p>
      </Alert>
    }
  }
  console.log("FormState", formState)
  const renderForm = () => {
    return <>
    <Form style={{marginTop:20, marginBottom:20}} onSubmit={onSubmit}>
      <PacientFieldset disabled={isLoading} paciente={formState.paciente} onChange={(paciente)=>{
        updateForm({
          ...formState,
          paciente
        })
      }} />
      <fieldset disabled={isLoading}>
        <legend>Doctor</legend>
        <Form.Group controlId="doctor">
            <Form.Label>Nombre</Form.Label>
            <Form.Control as="select" type="text" onChange={onChangeDoctor} value={formState.doctor.id}>
              <option id="0"></option>
              {doctores.map((doctor)=>{
                return <option key={doctor.id} id={String(doctor.id)} value={String(doctor.id)}>{doctor.nombre}</option>
              })}
            </Form.Control>
          </Form.Group>
      </fieldset>
      <fieldset disabled={isLoading}>
        <legend>Servicios</legend>
        <Table>
          <thead>
            <tr>
              <th style={{width:0}}>#</th>
              <th>Nombre</th>
              <th>Nota</th>
              <th style={{width:0}}></th>
            </tr>
          </thead>
          <tbody>
            {renderServicios()}
            <tr>
              <td>{formState.servicios.length+1}</td>
              <td><Form.Control as="select"
                value={servicioSolicitado.id}
                onChange={(e)=>{
                console.log("onChange required service", e.target.value)
                updateServiciosSolicitado({
                  ...servicioSolicitado,
                  id: parseInt(e.target.value),
                })
              }}>
                <option id="0"></option>
                {serviciosDisponibles.map((servicio)=>(
                  <option key={servicio.id} id={String(servicio.id)} value={String(servicio.id)}>{servicio.nombre}</option>
                ))}
              </Form.Control></td>
              <td><Form.Control as="textarea"
                value={servicioSolicitado.nota}
                onChange={(e)=>{
                updateServiciosSolicitado({
                  ...servicioSolicitado,
                  nota: e.target.value
                })
              }}></Form.Control></td>
              <td><Button variant="link" onClick={()=>{
                console.log("Required Service", servicioSolicitado)
                const selectedService = servicios.find((servicio)=>servicio.id==servicioSolicitado.id)
                if(selectedService){
                  updateForm({
                    ...formState,
                    servicios: [...formState.servicios, {
                      id: selectedService.id,
                      nombre: selectedService.nombre,
                      nota: servicioSolicitado.nota
                    }]
                  })
                  updateServiciosSolicitado({
                    id: 0,
                    nota: ""
                  })
                }
              }} className="btn-icon"><FaPlus /></Button></td>
            </tr>
          </tbody>
        </Table>
      </fieldset>
      <fieldset disabled={isLoading}>
        <legend>Proveedor</legend>
        <Form.Group controlId="doctor">
            <Form.Label>Nombre</Form.Label>
            <Form.Control as="select" type="text" onChange={onChangeProveedor} value={formState.proveedor.id}>
              <option id="0"></option>
              {proveedoresAdecuados.map((proveedor)=>(
                <option key={proveedor.id} id={String(proveedor.id)} value={String(proveedor.id)}>{proveedor.nombre}</option>
              ))}
            </Form.Control>
          </Form.Group>
      </fieldset>
      <Button variant="primary" type="submit">
        {isLoading && <Spinner animation="border" size="sm" />} Guardar
      </Button>
    </Form>
    <Modal
      show={dialogVisible}
      onHide={()=>{
        console.log("On Hide")
        showDialog(false)
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          D.M. - 11
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       {renderPdf()}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </>
  }

  return <div className="d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1">
    <h1>Transferencia externa</h1>
    {renderForm()}
    <Modal
      show={!stateOfLoadInitData.completed}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Cargando
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Spinner animation="border" />
      </Modal.Body>
    </Modal>
  </div>
}

const App = TransferenciaExternaForm;

export default App;
