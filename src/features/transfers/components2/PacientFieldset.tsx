import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Form, Col, FormControlProps } from 'react-bootstrap'
import {LoadingInput} from '../../../commons/components'
import {useFetch} from '../../../commons/hooks'
import {baseUrl} from "../../../configs/app.json"

type Paciente = {
  id: number,
  carnet: string,
  nombre: string,
  empresa: {
    nombre: string,
    estado: string
  }
}

type Props = {
  disabled?: boolean,
  paciente: Paciente,
  onChange: (paciente: Paciente)=>void
}

const initial = {
  id: 0,
  carnet: "",
  nombre: "",
  empresa: {
    nombre: "",
    estado: ""
  }
}

export default ({disabled, paciente, onChange}: Props) => {
  const lastCarnet = useRef(paciente.carnet)
  const [stateOfGetPaciente, getPaciente] = useFetch(()=>fetch(baseUrl + `/pacientes?carnet=${paciente.carnet}`), [paciente.carnet])

  const onChangeCarnet = useCallback<NonNullable<FormControlProps["onChange"]>>((e)=>{
    const value = e.target.value.toUpperCase()
    onChange({
      ...initial,
      carnet: value
    })
  }, [paciente])

  const onBlurCarnet = useCallback((e: React.FocusEvent<HTMLInputElement>)=>{
    if(lastCarnet.current != paciente.carnet){
      lastCarnet.current = paciente.carnet
      getPaciente()
    }
  }, [paciente.carnet])

  useEffect(()=>{
    if(stateOfGetPaciente.completed && !stateOfGetPaciente.error){
      const data = stateOfGetPaciente.data as Array<Paciente>
      if(data.length){
        onChange(data[0])
      }
    }
  }, [stateOfGetPaciente])

  return <fieldset disabled={disabled} >
  <legend>Paciente</legend>
  <Form.Row>
    <Form.Group as={Col} sm controlId="carnet_paciente">
      <Form.Label>Nº Carnet</Form.Label>
      <Form.Control type="text" 
        isInvalid={stateOfGetPaciente.completed && !stateOfGetPaciente.error && !stateOfGetPaciente.data.length} 
        onChange={onChangeCarnet} 
        onBlur={onBlurCarnet} value={paciente.carnet} />
    </Form.Group>
    <Form.Group as={Col} sm={9} controlId="nombre_paciente">
      <Form.Label>Nombre</Form.Label>
      <Form.Control  as={LoadingInput} loading={stateOfGetPaciente.completed===false}
        placeholder={stateOfGetPaciente.completed===false ? "Buscando":  stateOfGetPaciente.error ? "Error" : ""}
        readOnly type="text" value={paciente.nombre.toUpperCase()} />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} sm={9} controlId="empresa">
      <Form.Label>Empresa</Form.Label>
      <Form.Control as={LoadingInput} loading={stateOfGetPaciente.completed===false}
        placeholder={stateOfGetPaciente.completed===false ? "Buscando":  stateOfGetPaciente.error ? "Error" : ""}
        readOnly type="text" value={paciente.empresa.nombre.toUpperCase()} />
    </Form.Group>
    <Form.Group as={Col} sm controlId="estado">
      <Form.Label>Estado</Form.Label>
      <Form.Control  as={LoadingInput} loading={stateOfGetPaciente.completed===false}
        placeholder={stateOfGetPaciente.completed===false ? "Buscando":  stateOfGetPaciente.error ? "Error" : ""}
        readOnly type="text" isInvalid={paciente.empresa.estado=="Mora"} value={paciente.empresa.estado.toUpperCase()} />
    </Form.Group>
  </Form.Row>
</fieldset>

}