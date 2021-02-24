import React, { useCallback, useState, useEffect, useRef, DependencyList, MutableRefObject} from 'react';
import { Container, DropdownButton, Col, Table, FormControlProps, Navbar, Nav, Spinner, Modal, NavDropdown, Badge, Popover, OverlayTrigger, Row } from 'react-bootstrap'
import { default as TransferForm } from "./features/transfers/components/TransferForm"
import { MdApps } from 'react-icons/md'
import { FaBell, FaUserCircle, FaBars, FaClinicMedical } from 'react-icons/fa'
import Organization from './features/organization/components/Organization'
import logo from './logo.svg';
import './App.css';
import './simple-sidebar.css'
import { Sidebar } from './commons/components/Sidebar';

export default ()=>{
  const [isSidebarVisible, setSidebarVisible] = useState(true)
  const toggleSidebar = () => {
    setSidebarVisible(visible => !visible)
  }
  return <>
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
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
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
          <Nav.Link href="#" style={{whiteSpace: "nowrap"}}><FaBell /><Badge className="pulse" pill variant="danger">9</Badge></Nav.Link>
        </OverlayTrigger>
        <NavDropdown title={<><FaUserCircle /><span className="d-none d-sm-inline ml-1">1234567890</span></>} menuAlign="right" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">Cuenta</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Configuracion</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Cerrar sesión</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
    <div className={"position-relative d-flex flex-grow-1 bg-light" + (isSidebarVisible ? "" : " toggled")}  id="wrapper">
      <Sidebar className="bg-white shadow-sm " style={{height: "initial"}} items={[
        {
          id: "organizational-structure",
          title: "Estructura Organizacional" 
        },
        {
          id: "employee",
          title: "Empleados" 
        },
        {
          id: "asistencia",
          title: "Asistencia" 
        }
      ]}/>
    <Container className="d-flex flex-column flex-grow-1" style={{overflow: "auto"}}>
      <Organization />
    </Container>
    </div>
  </>
};
