import React, { useCallback, useState, useEffect, useRef, DependencyList, MutableRefObject} from 'react';
import { Container, DropdownButton, Col, Table, FormControlProps, Navbar, Nav, Spinner, Modal, NavDropdown, Badge, Popover, OverlayTrigger, Row } from 'react-bootstrap'
import { Sidebar } from '../../commons/components/Sidebar';
import TransferForm from '../../features/transfers/components/TransferForm'
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

export default ()=>{  
  const showSidebar = useSelector((state:any)=>state.main.showSidebar)
  const { path, url } = useRouteMatch()

  return <div className={"position-relative d-flex flex-grow-1 bg-light" + (showSidebar ? "" : " toggled")}  id="wrapper">
      <Sidebar className="bg-white shadow-sm " style={{height: "initial"}} items={[
        {
          id: "visits",
          path: `${url}/consultas`,
          title: "Consultas" 
        },
        {
          id: "transfers",
          path: `${url}/transferencias`,
          title: "Transferencias" 
        }
      ]}/>
    <Container className="d-flex flex-column flex-grow-1" style={{overflow: "auto"}}>
      <TransferForm />
    </Container>
    </div>
};
