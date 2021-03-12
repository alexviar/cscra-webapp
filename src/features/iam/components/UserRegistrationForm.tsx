import React from 'react'
import { Accordion, Button, Card, Col, Form } from 'react-bootstrap'
import PersonalInfoForm from './PersonalInfoForm'

export default () => {

  return <div style={{minWidth: 480}} className="d-flex flex-column bg-white rounded-lg shadow-sm m-2 p-3 flex-grow-1">
    <h1 style={{fontSize: "2rem"}}>Usuarios</h1>
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} className="bg-primary text-light" eventKey="0">
          Información personal
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <PersonalInfoForm onSubmit={()=>{}} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} className="bg-primary text-light" eventKey="1">
          Información de Usuario
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} md={4}>
                  <Form.Label>Usuarios</Form.Label>
                  <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>Repetir contraseña</Form.Label>
                  <Form.Control type="password"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Button type="submit">Registrar</Button>
                </Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
}