import React, {useMemo} from 'react'
import { ListGroup, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// import { makeGetWageById } from '../selectors/getSelectedWage'
// import { Wage } from '../state'


export const WageDetails = ({wageId}: {wageId: number})=>{
  // const getWageById = useMemo(()=>makeGetWageById(wageId), [wageId])
  // const wage = useSelector(getWageById)
  // console.log(wage)

  // return wage ? <div>
  //   <h2 style={{fontSize: "1.75rem"}}>{wage.name}</h2>
  //   <p>{wage.description}</p>
  //   <Table>
  //     {/* <tr>
  //       <th scope="row" style={{width: '1px'}}>Descripción</th>
  //       <td>{wage.description}</td>
  //     </tr> */}
  //     <tr>
  //       <th className="text-nowrap" scope="row" style={{width: '1px'}}>Tipo de nomina</th>
  //       <td>{wage.payrollType!.name}</td>
  //     </tr>
  //     <tr>
  //       <th scope="row">Vigente</th>
  //       <td>{wage.inForce ? 'Sí' : 'No'}</td>
  //     </tr>
  //     <tr>
  //       <th className="text-nowrap" scope="row">Método de cálculo</th>
  //       <td>{wage.calculationMethod!.name + (wage.calculationMethod!.id == 1 ? ` (${wage.formula})` : "")}</td>
  //     </tr>
  //     <tr>
  //       <th scope="row">Descuentos aplicados</th>
  //       {
  //         wage.applicableDeductions.length ? 
  //           <td >{wage.applicableDeductions.map(d=>d.name).join(', ')}</td> : 
  //           <td className="bg-light">No se aplican descuentos</td>
  //       }
  //     </tr>
  //   </Table>
  //   {/* <h3 style={{fontSize: "1.5rem"}}>A este ingreso se le aplicaran las siguientes deducciones:</h3> */}
  //   {/* <ListGroup>
  //     {wage.applicableDeductions.map(d=>{
  //       return <ListGroup.Item key={d.id}>
  //         {d.name}
  //       </ListGroup.Item>
  //     })}
  //   </ListGroup> */}
  // </div> : null
  return null
}