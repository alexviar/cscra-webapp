import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Deductions from './Deductions'
import Payrolls from './Payrolls'
import Wages from './Wages'
import {WageForm} from './WageForm'

export default ()=>{  
  const { path, url } = useRouteMatch()
  return <>
    <Switch>
      <Route exact path={`${url}`}>
        <Payrolls />
      </Route>
      <Route path={`${url}/percepciones`}>
        <Wages />
      </Route>
      <Route path={`${url}/deducciones`}>
        <Deductions />
      </Route>
    </Switch>
    
    <Route exact path={`${url}/percepciones/:action(crear)`}>
      <WageForm />
    </Route>
    <Route exact path={`${url}/percepciones/:action(editar)/:id`}>
      <WageForm />
    </Route>
  </>
}