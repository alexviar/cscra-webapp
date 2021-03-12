import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import {Sidebar} from '../../commons/components/Sidebar'
import Organization from '../../features/organization/components/Organization'
import {EmployeesList} from '../../features/employees/components/EmployeesList'
import {EmployeeForm} from '../../features/employees/components/EmployeeForm'
import { FaBuilding, FaCalculator } from 'react-icons/fa'
import { BsPersonFill, BsPersonPlusFill } from 'react-icons/bs'
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr'
import SidebarLayout from '../../commons/components/layouts/SidebarLayout'
import PayrollRoutes from '../../features/payrolls/components/PayrollRoutes'

export const HrApp = ()=>{
  const { path, url } = useRouteMatch()
  return <SidebarLayout sidebar={{
    items: [
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
      },
      {
        id: "payroll",
        icon: <GrMoney />,
        path: `${url}/nominas`,
        title: "Nominas",
        items: [
          {
            id: "compute",
            icon: <FaCalculator />,
            path: `${url}/nominas/calcular`,
            title: "Calcular nomina"
          },
          {
            id: "payroll-types",
            icon: <BsPersonPlusFill />,
            path: `${url}/nominas/tipos`,
            title: "Tipos de nominas"
          },
          {
            id: "payroll-wages",
            icon: <GiReceiveMoney />,
            path: `${url}/nominas/percepciones`,
            title: "Bonos"
          },
          {
            id: "payroll-deductions",
            icon: <GiPayMoney />,
            path: `${url}/nominas/deducciones`,
            title: "Deducciones"
          }
        ]
      }
    ]
  }}>
    <Switch>
      <Route exact path={path}>
          <Redirect to={`${path}/organizacion`} />
      </Route>
      <Route  path={`${path}/organizacion`}><Organization /></Route>
      <Route  path={`${path}/empleados/registrar`}><EmployeeForm /></Route>
      <Route  path={`${path}/empleados/:id/ver`}><EmployeeForm /></Route>
      <Route  exact path={`${path}/empleados`}><EmployeesList /></Route>
      <Route path={`${path}/nominas`}><PayrollRoutes /></Route>
    </Switch>
  </SidebarLayout>
}

export default HrApp