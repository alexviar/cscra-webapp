import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import {Sidebar} from '../../commons/components/Sidebar'
import Organization from '../../features/organization/components/Organization'
import {EmployeesList} from '../../features/employees/components/EmployeesList'
import {EmployeeForm} from '../../features/employees/components/EmployeeForm'
import { FaBuilding, FaCalculator, FaTasks, FaUserPlus, FaUsers } from 'react-icons/fa'
import { BsPersonFill, BsPersonPlusFill } from 'react-icons/bs'
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr'
import SidebarLayout from '../../commons/components/layouts/SidebarLayout'
import PayrollRoutes from '../../features/payrolls/components/PayrollRoutes'
import UsersIndex from '../../features/iam/components/UsersIndex'
import RolesIndex from '../../features/iam/components/RolesIndex'
import RoleForm from '../../features/iam/components/RoleForm'
import UserRegistrationForm from '../../features/iam/components/UserRegistrationForm'

export const IamApp = ()=>{
  const { path, url } = useRouteMatch()
  return <SidebarLayout sidebar={{
    items: [
      {
        id: "users",
        icon: <FaUsers />,
        path: `${url}/usuarios`,
        title: "Usuarios",
        // items: [
        //   {
        //     id: "register-user",
        //     icon: <FaUserPlus />,
        //     path: `${url}/empleados/registrar`,
        //     title: "Registrar"
        //   }
        // ]
      },
      {
        id: "roles",
        icon: <FaTasks />,
        path: `${url}/roles`,
        title: "Roles"
      }
    ]
  }}>
    <Switch>
      <Route exact path={`${url}`}>
        <Redirect to={`${url}/usuarios`} />
      </Route>
      <Route exact path={`${url}/usuarios`}>
        <UsersIndex />
      </Route>
      <Route exact path={`${url}/usuarios/registrar`}>
        <UserRegistrationForm />
      </Route>
      <Route path={`${url}/roles`}>
        <RolesIndex />
      </Route>
    </Switch>
    
    <Route exact path={`${url}/roles/:action(crear)`}>
      <RoleForm />
    </Route>
    <Route exact path={`${url}/roles/:action(editar)/:id`}>
      <RoleForm />
    </Route>
  </SidebarLayout>
}

export default IamApp