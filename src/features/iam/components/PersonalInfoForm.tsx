import React from 'react'
import { Col, Form, Button, FormProps } from 'react-bootstrap'

export default (props: FormProps)=>{
  return <Form>
    <Form.Row>
      <Form.Group as={Col} sm={8} md={6}>
        <Form.Label>Documento de identidad</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
      <Form.Group as={Col} sm={4} md={3}>
        <Form.Label>Complemento</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
      <Form.Group as={Col} sm={4} md={3}>
        <Form.Label>Expedido en</Form.Label>
        <Form.Control as="select" value="">
          <option disabled value=""></option>
          <option value="BN">Beni</option>
          <option value="CB">Cochabamba</option>
          <option value="CH">Chuquisaca</option>
          <option value="LP">La Paz</option>
          <option value="OR">Oruro</option>
          <option value="PN">Pando</option>
          <option value="PT">Potosí</option>
          <option value="TJ">Tarija</option>
          <option value="SC">Santa Cruz</option>
        </Form.Control>
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Col className="mb-2">
        <Button>Buscar</Button>
      </Col>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} lg={4}>
        <Form.Label>Nombres</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
      <Form.Group as={Col} lg={4}>
        <Form.Label>Primer Apellido</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
      <Form.Group as={Col} lg={4}>
        <Form.Label>Segundo Apellido</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} md={4}>
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="date"></Form.Control>
      </Form.Group>
      <Form.Group as={Col} xs={6} md={4}>
        <Form.Label>Genero</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
      <Form.Group as={Col} xs={6} md={4}>
        <Form.Label>Nacionalidad</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Col className="mb-2">
        <Button type="submit">Registrar</Button>
      </Col>
    </Form.Row>
  </Form>
}