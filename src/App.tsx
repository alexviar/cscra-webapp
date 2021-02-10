import React, { useCallback, useState, useEffect, useRef, DependencyList, MutableRefObject} from 'react';
import { Container, Form, Button, Col, Table, FormControlProps, Navbar, Nav, Spinner, Modal } from 'react-bootstrap'
import { FaMinus as FaTrash, FaPlus, FaPlusCircle } from 'react-icons/fa'
//@ts-ignore
import PDFObject from 'pdfobject'
import useCallbackRef from'./useCallbackRef'
import logo from './logo.svg';
import './App.css';

const baseUrl = "https://cscra2.mybluemix.net/api";

type StateOfSubmit = {
  completed: boolean,
  data?: {
    url: string
  },
  error: boolean
}

type StateOfGetPaciente = {
  completed: boolean,
  data?: {
    id: number,
    carnet: string,
    nombre: string,
    empresa: {
      nombre: string,
      estado: string
    },
  },
  error: boolean
}

type StateOfLoadInitData = {
  completed: boolean,
  data?: {
    doctores: {
      id: number,
      nombre: string,
    }[],
    proveedores: {
      id: number,
      nombre: string,
      servicios: {
        id: number,
      }[]
    }[],
    servicios: {
      id: number,
      nombre: string,
    }[]
  },
  error: boolean
}


type FormState = {
  paciente: {
    id: number,
    carnet: string,
    nombre: string,
    empresa: {
      nombre: string,
      estado: string
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

function PDFViewer({url, height}:{url: string, height: number}) {
  useEffect(()=>{
    var options = {
      fallbackLink: '<p>Este navegador no soporta la visualizacion de archivos PDF en linea, por favor descarga el archivo haciendo clic : <a href="[url]">aquí</a></p>'
    };
   
    PDFObject.embed(url, "#pdfcontainer", options);
  }, [url])
  return <div id="pdfcontainer" style={{height}}></div>
}

function TransferenciaExternaForm() {
  const [formState, updateForm] = useState<FormState>({
    paciente: {
      id: 0,
      carnet: "",
      nombre: "",
      empresa: {
        nombre: "",
        estado: ""
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

  const [servicioSolicitado, updateServiciosSolicitado] = useState({
    id: 0,
    nota: ""
  })

  const onChangeCarnetPaciente = useCallback<NonNullable<FormControlProps["onChange"]>>((e)=>{
    const value = e.target.value.toUpperCase()
    updateForm({
      ...formState,
      paciente: {
        ...formState.paciente,
        carnet: value
      }
    })
  }, [formState])

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

  const [stateOfGetPaciente, updateStateOfGetPaciente] = useState<StateOfGetPaciente>({
    completed: false,
    error: false
  })

  const a = useRef(Math.random())
  console.log(a)

  const onGetPacienteData = useCallbackRef((paciente: FormState["paciente"])=>{
    updateForm({
      ...formState,
      paciente
    })
    console.log(paciente)
  }, [formState])

  const onBlurCarnetPaciente = useCallback((e: React.FocusEvent<HTMLInputElement>)=>{
    const getPacienteData = async (carnet: string) => {
      updateStateOfGetPaciente({
        completed: false,
        error: false
      })
      const response = await fetch(baseUrl + `/pacientes?carnet=${carnet}`)
      if (!response.ok) {
        updateStateOfGetPaciente({
          completed: true,
          error: true,
        })
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const paciente = await response.json();
        console.log("GetPaciente", paciente)
        updateStateOfGetPaciente({
          completed: true,
          data: paciente.length ? paciente[0]: undefined,
          error: false
        })        
        if(paciente.length){
          onGetPacienteData.current(paciente[0])
        }
      }
    }
    getPacienteData(formState.paciente.carnet).catch(
      (e)=> console.error(e.message)
    )
  }, [formState.paciente.carnet])

  const [stateOfSubmit, updateStateOfSubmit] = useState<StateOfSubmit>({
    completed: false,
    error: false
  })

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    const submit = async () => {
      updateStateOfSubmit({
        completed: false,
        error: false
      })
      const response = await fetch(baseUrl+"/transferencias", {
        method: 'POST',      
        // mode: 'cors',
        // credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          "paciente_id": formState.paciente.id,
          "doctor_id": formState.doctor.id,
          "proveedor_id": formState.proveedor.id,
          "servicios_ids": formState.servicios.map((servicio)=>servicio.id)
        })
      })
  
      if (!response.ok) {
        updateStateOfSubmit({
          completed: true,
          error: true
        })
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const result = await response.json()
        updateStateOfSubmit({
            completed: true,
            data: result,
            error: false
        })
      }
    }

    submit().catch(
      (e)=> console.error(e.message)
    )
  }, [formState])

  const [stateOfLoadInitData, updateStateOfLoadInitData] = useState<StateOfLoadInitData>({
    completed: false,
    error: false
  })
  const {doctores, proveedores, servicios}: StateOfLoadInitData["data"] = stateOfLoadInitData.data || {doctores:[], proveedores:[], servicios:[]}
  const [proveedoresAdecuados, updateProveedoresAdecuados] = useState(proveedores)
  const [serviciosDisponibles, updateServiciosDisponibles] = useState(servicios)

  useEffect(()=>{
    if(stateOfLoadInitData.completed && !stateOfLoadInitData.error){
      const nuevosProveedores = proveedores.filter(proveedor=>{
        return formState.servicios.every(rs => {
          return proveedor.servicios.some(ps => ps.id ==rs.id)
        })
      })
      console.log("Proveedores", nuevosProveedores)
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
      console.log("Servicios", serviciosDisponibles)
      updateServiciosDisponibles(serviciosDisponibles)
    }
  }, [formState.servicios, stateOfLoadInitData])

  useEffect(() => {
    const loadInitData = async () => {
      const response = await Promise.all([
        fetch(baseUrl + "/doctores"),
        fetch(baseUrl + "/proveedores"),
        fetch(baseUrl + "/servicios")
      ])

      if (response.some(r=>!r.ok)) {
        console.log("Init Failed");
        updateStateOfLoadInitData({
          completed: true,
          error: true
        })
        throw new Error(`HTTP error! status: `);
      } else {
        const [doctores, proveedores, servicios] = await Promise.all(response.map((r)=> r.json()))
        console.log("Init Success", {doctores, proveedores, servicios});
        updateStateOfLoadInitData({
            completed: true,
            data: {doctores, proveedores, servicios},
            error: false
        })
      }
    }
    loadInitData().catch(
      (e)=> console.error(e.message)
    )
  }, [])


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
    const url = stateOfSubmit.data && stateOfSubmit.data.url
    return url ? <PDFViewer url={url} height={400}></PDFViewer> : null
  }
  console.log("FormState", formState)
  const renderForm = () => {
    return <>
    <Form style={{marginTop:20, marginBottom:20}} onSubmit={onSubmit}>
      <fieldset title="Paciente" >
        <legend>Paciente</legend>
        <Form.Row>
          <Form.Group as={Col} sm controlId="carnet_paciente">
            <Form.Label>Nº Carnet</Form.Label>
            <Form.Control type="text" isInvalid={stateOfGetPaciente.completed && !stateOfGetPaciente.error && !stateOfGetPaciente.data} onChange={onChangeCarnetPaciente} onBlur={onBlurCarnetPaciente} value={formState.paciente.carnet} />
          </Form.Group>
          <Form.Group as={Col} sm={9} controlId="nombre_paciente">
            <Form.Label>Nombre</Form.Label>
            <Form.Control readOnly type="text" value={formState.paciente.nombre.toUpperCase()} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={9} controlId="empresa">
            <Form.Label>Empresa</Form.Label>
            <Form.Control readOnly type="text" value={formState.paciente.empresa.nombre.toUpperCase()} />
          </Form.Group>
          <Form.Group as={Col} sm controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Control readOnly type="text" isInvalid={formState.paciente.empresa.estado=="Mora"} value={formState.paciente.empresa.estado.toUpperCase()} />
          </Form.Group>
        </Form.Row>
      </fieldset>
      <fieldset>
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
      <fieldset>
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
      <fieldset>
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
        Guardar
      </Button>
    </Form>
    <Modal
      show={stateOfSubmit.data && !stateOfSubmit.error}
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
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  }

  return <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    <Container style={{marginTop: 20}}>
      <h1>Transferencia externa</h1>
      {!stateOfLoadInitData.completed ?
        <Spinner animation="border" /> :
        renderForm()
      }
    </Container>
  </>
}

const App = TransferenciaExternaForm;

export default App;
