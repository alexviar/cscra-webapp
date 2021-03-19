import React from "react"
import { Button, Form, Spinner } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { Users } from "../services"
import RolesCheckList from "./RolesCheckList"

type Inputs = {
  username: string,
  roleIds: number[]
}
export default ()=>{
  const formMethods = useForm()  
  const { register, reset, handleSubmit, watch, errors, formState: { isValid} } = formMethods
  const editUser = useMutation(Users.update)

  return <FormProvider {...formMethods} >
    <Form>
      <Form.Group controlId="username">
        <Form.Label >Nombre de usuario</Form.Label>
        <Form.Control
          isInvalid={!!errors.username}
          name="username"
          ref={register({
            pattern: { value: /^\S*$/, message: "Este campo no debe contener espacios."},
            required: {value: true, message: "Este campo es requerido."},
            minLength: {value: 4, message: "Este campo no debe tener al menos 4 caracteres."},
            maxLength: {value: 16, message: "Este campo no debe exceder los 16 caracteres."}
          })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">{errors.username?.message}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Roles</Form.Label>
        <RolesCheckList />
      </Form.Group>
      <Button type="submit">
        {editUser.isLoading ? <Spinner animation="border" size="sm" /> : null}
        <span className="ml-2">Registrar</span>
      </Button>
    </Form>
</FormProvider>
}