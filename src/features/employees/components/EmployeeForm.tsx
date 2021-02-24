import React, {useState} from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getOwnedJobs } from '../../organization/selectors/getOrganizationalStructure'
import { getUnits } from '../../organization/selectors/inputs'
import {getEmployeeFormState} from "../selectors"
import { Employee } from '../state'
import {v4 as uuidv4} from 'uuid'
import { Redirect, useRouteMatch, useLocation } from 'react-router-dom'

export const EmployeeForm = ()=>{
  const dispatch = useDispatch()
  const {fields} = useSelector(getEmployeeFormState)
  const units = useSelector(getUnits)
  const jobs = useSelector((state:any)=>getOwnedJobs(state, fields.unitId))

  const updateForm = (field: keyof typeof fields, value: string) => {
    dispatch({
      type: "UPDATE_EMPLOYEE_FORM",
      payload: {
        fields: {
          ...fields,
          [field]: value
        }
      }
    })
  }

  const onChange = (field: keyof typeof fields)=>(e:any) =>{
    const value = e.target.value
    updateForm(field, value)
  }

  return <div style={{minWidth: 480}} className="d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1">
    <Form onSubmit={(e)=>{
      e.preventDefault()
      const employee: Employee = {
        id: uuidv4(),
        dni: `${fields.dni}${fields.dniComplement ? "-" : ""}${fields.dniComplement}${fields.dniIssuedAt ? " " : ""}${fields.dniIssuedAt}`,
        name: fields.name,
        middlename: fields.middlename,
        lastname: fields.lastname,
        gender: fields.gender as "Masculino" | "Femenino",
        dateOfBirth: fields.dateOfBirth,
        nationality: fields.nacionality as "Boliviana" | "Extranjera",
        afp: fields.afp,
        contract: {
          type: fields.contractType,
          startDate: fields.startDate,
          jobId: fields.jobId,
          salary: Math.round(parseFloat(fields.salary)*100)
        }
      }
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: employee
      })
      dispatch({
        type: "RESET_EMPLOYE_FORM"
      })
    }}>
      <fieldset>
        <legend>Informacion Personal</legend>
        <Form.Row>
          <Form.Group as={Col} sm={6} md={4} controlId="employee-dni">
            <Form.Label>Carnet de Identidad</Form.Label>
            <Form.Control type="text" value={fields.dni} onChange={onChange("dni")} />
          </Form.Group>
          <Form.Group as={Col} xs={6} sm={3} md={2} controlId="employee-dni-complement">
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="text" value={fields.dniComplement} onChange={onChange("dniComplement")} />
          </Form.Group>
          <Form.Group as={Col} xs={6} sm={3} md={2} controlId="employee-dni-issued-at">
            <Form.Label>Expedido en</Form.Label>
            <Form.Control as="select" value={fields.dniIssuedAt} onChange={onChange("dniIssuedAt")} >
            <option></option>
            <option value="BN">Beni</option>
            <option value="CH">Chuquisaca</option>
            <option value="CB">Cochabamba</option>
            <option value="LP">La Paz</option>
            <option value="OR">Oruro</option>
            <option value="PN">Pando</option>
            <option value="PT">Potosí</option>
            <option value="SC">Santa Cruz</option>
            <option value="TJ">Tarija</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row className="d-none">
          <Form.Group as={Col}>
            <Button>Buscar</Button>
          </Form.Group>
        </Form.Row>

        <hr/>

        <Form.Row>
          <Form.Group as={Col} md={4} controlId="employee-name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={fields.name} onChange={onChange("name")} />
          </Form.Group>
          <Form.Group as={Col} md={4} controlId="employee-middlename">
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control type="text" value={fields.middlename} onChange={onChange("middlename")} />
          </Form.Group>
          <Form.Group as={Col} md={4} controlId="employee-lastname">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control type="text" value={fields.lastname} onChange={onChange("lastname")} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={4} controlId="employee-gender">
            <Form.Label>Sexo</Form.Label>
            <Form.Control as={"select"} value={fields.gender} onChange={onChange("gender")} >
              <option id="1" value="Masculino">Hombre</option>
              <option id="2" value="Femenino">Mujer</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} sm={8} md={4} controlId="employee-dayofbirth">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" value={fields.dateOfBirth} onChange={onChange("dateOfBirth")} />
          </Form.Group>
          <Form.Group as={Col} md={4} controlId="employee-nationality">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control as="select" value={fields.nacionality} onChange={onChange("nacionality")} >
              <option value="Boliviana">Boliviana</option>
              <option value="Extranjera">Extranjera</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

      </fieldset>
      <fieldset>
        <legend>Informacion de Contrato</legend>
        <Form.Row>
          <Form.Group as={Col} md={4} controlId="employee-contract-type">
            <Form.Label>Tipo de contrato</Form.Label>
            <Form.Control as={"select"} value={fields.contractType} onChange={onChange("contractType")} >
              <option id="1" value="item">Item</option>
              <option id="2" value="contrato laboral">Contrato Laboral</option>
              <option id="3" value="consultoría">Consultoría</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} sm={8} md={4} controlId="employee-contract-start-date">
            <Form.Label>Fecha de inicio</Form.Label>
            <Form.Control type="date" value={fields.startDate} onChange={onChange("startDate")} />
          </Form.Group>
          <Form.Group as={Col} sm={4} controlId="employee-contract-salary">
            <Form.Label>Salario</Form.Label>
            <Form.Control type="number" value={fields.salary} onChange={onChange("salary")} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="employee-contract-job-unit">
            <Form.Label>Unidad</Form.Label>
            <Form.Control as={"select"} value={fields.unitId} onChange={onChange("unitId")} >
              <>
                <option value=""></option>
                {units.map(unit=>(
                  <option key={unit.id} value={unit.id} >{unit.name}</option>
                ))}
              </>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="employee-contract-job">
            <Form.Label>Cargo</Form.Label>
            <Form.Control as="select" value={fields.jobId} onChange={onChange("jobId")} >
              <>
                <option value=""></option>
                {jobs.map(job=>(
                  <option key={job.id} value={job.id} >{job.name}</option>
                ))}
              </>
            </Form.Control>
          </Form.Group>
        </Form.Row>

      </fieldset>
      <fieldset>
        <legend>Información sobre AFP</legend>
        <Form.Row>
          <Form.Group as={Col} controlId="employee-afp">
            <Form.Label>Empresa</Form.Label>
            <Form.Control as="select" value={fields.afp} onChange={onChange("afp")} >
              <option></option>
              <option value="Prevision">Previsión</option>
              <option value="Futuro">Futuro</option>
              <option value="No aporta">No aporta</option>
              <option></option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </fieldset>
      <Button type="submit">Registrar</Button>
    </Form>
  </div>
}