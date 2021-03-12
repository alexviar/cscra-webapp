import React, { useState } from 'react'
import { Button, Col, Form, FormProps } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

type Props = {
  // onApply: ()=>void
} & FormProps
export default (props: Props)=>{
  const dispatch = useDispatch()
  const [fields, setFields] = useState({
    username: "",
    active: "",
  })

  return <Form {...props} onSubmit={(e)=>{
    e.preventDefault()
    dispatch({
      type: "UPDATE_USERS_FILTER",
      payload: {
        username: fields.username || undefined,
        active: fields.active ? parseInt(fields.active) : undefined
      }
    })
    props.onSubmit && props.onSubmit(e)
  }}>
    <Form.Row>
      <Col>
        <Form.Label htmlFor="username-filter" srOnly>
          Usuario
        </Form.Label>
        <Form.Control
          className="mb-2"
          id="username-filter"
          value={fields.username}
          onChange={(e)=> {
            const value = e.target.value
            setFields(fields=>({
              ...fields,
              username: value
            }))
          }}
          placeholder="Usuario"
        />
      </Col>
      <Col >
        <Form.Label htmlFor="status-filter" srOnly>
          Estado
        </Form.Label>
        <Form.Control
          as="select"
          className="mb-2"
          id="status-filter"
          value={fields.active}
          onChange={(e)=> {
            const value = e.target.value
            setFields(fields=>({
              ...fields,
              active: value
            }))
          }}
        >
          <option value="">Elige un estado</option>
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
        <Button type="submit" >Aplicar</Button>
      </Col>
    </Form.Row>
  </Form>
}