import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import {Sidebar} from '../../commons/components/Sidebar'
import Organization from '../../features/organization/components/Organization'
import {EmployeesList} from '../../features/employees/components/EmployeesList'
import {EmployeeForm} from '../../features/employees/components/EmployeeForm'
import { FaBuilding } from 'react-icons/fa'
import { BsPersonFill, BsPersonPlusFill } from 'react-icons/bs'

export const HrApp = ()=>{
  const showSidebar = useSelector((state:any)=>state.main.showSidebar)
  const { path, url } = useRouteMatch()
  
  return <div className={"position-relative d-flex flex-grow-1 bg-light" + (showSidebar ? "" : " toggled")}  id="wrapper">
    <Sidebar className="bg-white shadow-sm " style={{height: "initial"}} items={[
      {
        id: "organizational-structure",
        icon: <FaBuilding />,
        path: `${url}/organizacion`,
        title: "Estructura Organizacional" 
      },
      {
        id: "employee",
        icon: <BsPersonFill />,
        path: `${url}/empleados`,
        title: "Empleados",
        items: [
          {
            id: "registrar-empleado",
            icon: <BsPersonPlusFill />,
            path: `${url}/empleados/registrar`,
            title: "Registrar"
          }
        ]
      }
    ]}/>
  <Container className="d-flex flex-column flex-grow-1" style={{overflow: "auto"}}>
    <Switch>
      <Route exact path={path}>
          <Redirect to={`${path}/organizacion`} />
      </Route>
      <Route  path={`${path}/organizacion`}><Organization /></Route>
      <Route  path={`${path}/empleados/registrar`}><EmployeeForm /></Route>
      <Route  exact path={`${path}/empleados`}><EmployeesList /></Route>
    </Switch>
  </Container>
</div>

}

export default HrApp