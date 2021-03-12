import React from 'react'
import { Table } from 'react-bootstrap'

export default () => {
  return <div className="d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1">
  <h1 style={{fontSize: "2rem"}}>Lista de empleados</h1>
  {/* <FilterEmployeesForm /> */}
  {/* <div className="ml-auto mb-2">
    <Link to={`${url}/registrar`} className="btn btn-primary text-white">Registrar</Link>
  </div> */}
  <Table responsive className="small text-nowrap">
    <thead>
      <tr>
        <th style={{width: 0}}>#</th>
        <th >Fecha de inicio</th>
        <th >Fecha de cierre</th>
        <th >Titulo</th>
        <th >Total</th>
        <th ></th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </Table>
</div>
}