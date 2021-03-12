import React, { useEffect } from 'react';
import { Button, Col, Navbar, Nav, Modal, NavDropdown, Popover, OverlayTrigger, Row } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { MdApps } from 'react-icons/md'
import { FaBell, FaUserCircle, FaBars, FaClinicMedical, FaUserPlus } from 'react-icons/fa'
import HrApp from "./HrApp";
import MedicalApp from "./MedicalApp";
import IamApp from "./IamApp";
import {Login, ProtectedRoute} from "../../features/auth/components"
import { getUser, getStatusOfLoadUser } from "../../features/auth/selectors/inputSelectors"
import { useDispatch, useSelector } from 'react-redux'
import '../../App.css';
import '../../simple-sidebar.css'
import apiClient from '../../commons/services/apiClient';

export default ()=>{
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  // const {completed: userLoaded} = useSelector(getStatusOfLoadUser)


  const toggleSidebar = () => {
    //setSidebarVisible(visible => !visible)
    dispatch({
      type:"TOGGLE_SIDEBAR"
    })
  }

  useEffect(()=>{
    const jsonUser = localStorage.getItem("user")
    dispatch({
      type: "SET_USER",
      payload: jsonUser ? JSON.parse(jsonUser) : null
    })
    // dispatch({
    //   type: "LOAD_USER"
    // })
    // apiClient.get("/user").then(({data})=>{
    //   dispatch({
    //     type: "LOAD_USER_COMPLETED",
    //     payload: data,
    //     error: false
    //   })
    //   // localStorage.setItem("user", JSON.stringify(data))
    // }, e => {
    //   console.log(e)
    //   dispatch({
    //     type: "LOAD_USER_COMPLETED",
    //     payload: e,
    //     error: true
    //   })
    // })
  }, [])

  return <Router>
    <Navbar className="shadow-sm border-bottom" bg="white" variant="light" style={{zIndex: 1}}>
      {user ? <Navbar.Toggle style={{display: "initial"}} onClick={toggleSidebar} ><FaBars /></Navbar.Toggle> : null}
      <Navbar.Brand href="#home" className="ml-4">Hipócrates</Navbar.Brand>
      <Nav className="ml-auto">
        <OverlayTrigger
          trigger="click"
          rootClose
          placement="bottom"
          overlay={
            <Popover id="apps" style={{maxWidth: "none"}}>
              <Popover.Title className="text-center" as="h3">Aplicaciones</Popover.Title>
              <Popover.Content>
                <Row>
                  <Col className="text-center"><Link to="/rrhh" ><FaClinicMedical className="d-block mx-auto" size={48} /><span>Recursos Humanos</span></Link></Col>
                  <Col className="text-center"><Link to="/consultorio" ><FaClinicMedical className="d-block mx-auto"  size={48} /><span>Consultorio</span></Link></Col>
                  <Col className="text-center"><Link to="/afiliación"><FaClinicMedical className="d-block mx-auto" size={48} /><span >Afiliaciones</span></Link></Col>
                </Row>
                <Row>
                  <Col className="text-center"><Link to="/iam"><FaUserCircle className="d-block mx-auto" size={48} /><span >IAM</span></Link></Col>
                  <Col className="text-center"><FaClinicMedical className="d-block mx-auto" size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                  <Col className="text-center"><FaClinicMedical size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                </Row>
                <Row>
                  <Col className="text-center"><FaClinicMedical className="d-block mx-auto" size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                  <Col className="text-center"><FaClinicMedical className="d-block mx-auto" size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                  <Col className="text-center"><FaClinicMedical className="d-block mx-auto" size={48} /><span style={{whiteSpace: "nowrap"}}>App Name</span></Col>
                </Row>
              </Popover.Content>
            </Popover>
          }
        >
          <Nav.Link><MdApps size="1.5em" /></Nav.Link>
        </OverlayTrigger>
        {user ? <OverlayTrigger
          trigger="click"
          rootClose
          placement="bottom"
          overlay={
            <Popover id="apps">
              <Popover.Title className="text-center" as="h3">Notificaciones</Popover.Title>
              <Popover.Content>
                
              </Popover.Content>
            </Popover>
          }
        >
          <Nav.Link style={{whiteSpace: "nowrap"}}>
            <FaBell />
            {/* <Badge className="pulse" pill variant="danger">9</Badge> */}
            <div className="pulse bg-danger" style={{
              left: "0.65rem",
              top: "-1.35rem",
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "50%"
            }}></div>
          </Nav.Link>
        </OverlayTrigger> : null}
        {user ? <NavDropdown title={<><FaUserCircle /><span className="d-none d-sm-inline ml-1">{user.username}</span></>} menuAlign="right" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">Cuenta</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Configuracion</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Button} className="btn-link" >Cerrar sesión</NavDropdown.Item>
        </NavDropdown> : <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>}
      </Nav>
    </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <ProtectedRoute path="/iam">
            <IamApp />
          </ProtectedRoute>
          <ProtectedRoute path="/rrhh">
            <HrApp />
          </ProtectedRoute>
          <ProtectedRoute path="/consultorio">
            <MedicalApp />
          </ProtectedRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch> :
        {/* <Modal centered show={true}>
          <Modal.Body>
            Autenticando, por favor espere...
          </Modal.Body>
        </Modal>} */}
  </Router>
};
