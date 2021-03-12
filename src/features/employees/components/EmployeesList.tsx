import React from "react"
import { Table, Button } from 'react-bootstrap'
import { BsEyeFill, BsTrashFill } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, useRouteMatch } from "react-router-dom"
import { getEmployeeTableView } from "../selectors"
import FilterEmployeesForm from "./FilterEmployeesForm"

export const EmployeesList = ()=>{  
  const { path, url } = useRouteMatch()
  const employeesTableView = useSelector(getEmployeeTableView)

  return <div style={{minWidth: 480}} className="d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1">
    <h1 style={{fontSize: "2rem"}}>Lista de empleados</h1>
    {/* <FilterEmployeesForm /> */}
    {/* <div className="ml-auto mb-2">
      <Link to={`${url}/registrar`} className="btn btn-primary text-white">Registrar</Link>
    </div> */}
    <Table responsive className="small text-nowrap">
      <thead>
        <tr>
          <th style={{width: 0}}>#</th>
          <th >Carnet de identidad</th>
          <th >Nombre completo</th>
          <th >Sexo</th>
          <th >Fecha de nacimiento</th>
          <th >Nacionalidad</th>
          <th >Tipo de contrato</th>
          <th >Fecha de incorporación</th>
          <th >Unidad</th>
          <th >Cargo</th>
          <th >Salario</th>
          <th >Afp</th>
          <th ></th>
        </tr>
      </thead>
      <tbody>
        {employeesTableView.map((e, i)=>{
          return <tr>
            <th scope="row">
              {i+1}
            </th>
            <td>{e.dni}</td>
            <td className="text-nowrap">{e.fullName}</td>
            <td>{e.gender}</td>
            <td>{e.dateOfBirth}</td>
            <td>{e.nationality}</td>
            <td>{e.contract.type}</td>
            <td>{e.contract.startDate}</td>
            {/* <td>{e.contract.endDate}</td> */}
            <td className="text-nowrap">{e.contract.job.unit?.name}</td>
            <td className="text-nowrap">{e.contract.job.name}</td>
            <td>{e.contract.salary}</td>
            <td>{e.afp}</td>
            <td>
              <Button className="btn-icon d-inline" variant="link" ><BsEyeFill /></Button>
              {/* <Button className="btn-icon d-inline" variant="link" ><BsTrashFill /></Button> */}
            </td>
          </tr>
        })}
      </tbody>
    </Table>
  </div>
}