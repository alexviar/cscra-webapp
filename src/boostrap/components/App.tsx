import React, { useCallback, useState, useEffect, useRef, DependencyList, MutableRefObject} from 'react';
import { Container, DropdownButton, Col, Table, FormControlProps, Navbar, Nav, Spinner, Modal, NavDropdown, Badge, Popover, OverlayTrigger, Row } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { useDispatch } from 'react-redux'
import HrApp from "./HrApp";
import MedicalApp from "./MedicalApp";
import { MdApps } from 'react-icons/md'
import { FaBell, FaUserCircle, FaBars, FaClinicMedical } from 'react-icons/fa'
import '../../App.css';
import '../../simple-sidebar.css'

export default ()=>{
  const dispatch = useDispatch()
  const toggleSidebar = () => {
    //setSidebarVisible(visible => !visible)
    dispatch({
      type:"TOGGLE_SIDEBAR"
    })
  }
  return <Router>
    <Navbar className="shadow-sm border-bottom" bg="white" variant="light" style={{zIndex: 1}}>
      <Navbar.Toggle style={{display: "initial"}} onClick={toggleSidebar} ><FaBars /></Navbar.Toggle>
      <Navbar.Brand href="#home" className="ml-4">Hipocrates</Navbar.Brand>
      <Nav className="ml-auto">
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="apps">
              <Popover.Title className="text-center" as="h3">Aplicaciones</Popover.Title>
              <Popover.Content>
                <Row>
                  <Col className="text-center"><Link to="/rrhh" ><FaClinicMedical size={48} /><span>Recursos Humanos</span></Link></Col>
                  <Col className="text-center"><Link to="/consultorio" ><FaClinicMedical size={48} /><span>Consultorio</span></Link></Col>
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                </Row>
                <Row>
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                </Row>
                <Row>
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                </Row>
              </Popover.Content>
            </Popover>
          }
        >
          <Nav.Link href="#"><MdApps size="1.5em" /></Nav.Link>
        </OverlayTrigger>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="apps">
              <Popover.Title className="text-center" as="h3">Notificaciones</Popover.Title>
              <Popover.Content>
                
              </Popover.Content>
            </Popover>
          }
        >
          <Nav.Link href="#" style={{whiteSpace: "nowrap"}}>
            <FaBell />
            {/* <Badge className="pulse" pill variant="danger">9</Badge> */}
            <div className="pulse bg-danger" style={{
              left: "0.65rem",
              top: "-1.35rem",
              width: "0.45rem",
              height: "0.45rem",
              borderRadius: "50%"
            }}></div>
          </Nav.Link>
        </OverlayTrigger>
        <NavDropdown title={<><FaUserCircle /><span className="d-none d-sm-inline ml-1">1234567890</span></>} menuAlign="right" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">Cuenta</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Configuracion</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Cerrar sesión</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/rrhh">
            <HrApp />
          </Route>
          <Route path="/consultorio">
            <MedicalApp />
          </Route>
        </Switch>
  </Router>
};
