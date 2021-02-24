import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getSelectedUnit } from '../selectors/getSelectedUnit'

export const UnitDetails = ()=>{
  const unit = useSelector(getSelectedUnit)
  console.log(unit)
  function renderSubUnits(){
    return <>
      <h3 style={{fontSize: "1.5rem"}}>Sub unidades</h3>
      <Table responsive>
        <thead>
          <tr>
            <th style={{width:0}}>#</th>
            <th>Nombre</th>
            {/* <th style={{width:0}}></th> */}
          </tr>
        </thead>
        <tbody>
          {unit!.subunits.length ? unit!.subunits.map((u, i)=>(
            <tr>
              <th scope="row">{i+1}</th>
              <td>{u.name}</td>
              {/* <td></td> */}
            </tr>
          )) : <tr><td className="bg-light text-center" colSpan={3}>Aun no se agregaron sub unidades</td></tr>}
        </tbody>
      </Table>
    </>
  }

  function renderJobs(){
    return <>
      <h3 style={{fontSize: "1.5rem"}}>Cargos</h3>
      <Table responsive>
        <thead>
          <tr>
            <th style={{width:0}}>#</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {unit!.jobs.length ? unit!.jobs.map((job, i)=>(
            <tr>
              <th scope="row">{i+1}</th>
              <td>{`${job.name} ${job.isManager ? "(Administrador)" : ""}`}</td>
              {/* <td></td> */}
            </tr>
          )) : <tr><td className="bg-light text-center" colSpan={3}>Aun no se agregaron puestos de trabajo</td></tr>}
        </tbody>
      </Table>
    </>
  }

  return unit ? <div>
    <h2 style={{fontSize: "1.75rem"}}>{unit.name}</h2>
    <p>{unit.description}</p>
    {renderSubUnits()}
    {renderJobs()}
  </div> : null
}