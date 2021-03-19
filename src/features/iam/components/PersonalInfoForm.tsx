import { AxiosError } from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Form, Button, FormProps, Spinner, Modal, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { PersonService } from '../../../commons/services/PersonService'
import { Person } from '../../../commons/types'
import { validation as validationMessages } from '../../../configs/messages.json'

type Inputs = {
  dni: string,
  dniComplement: string,
  dniIssuedAt: string,
  name: string,
  middlename: string,
  lastname: string,
  gender: string,
  dateOfBirth: string,
  nationality: string
}
export default (props: FormProps & {
  onComplete: (personId: number)=>void
})=>{
  const {
    handleSubmit,
    register,
    reset,
    getValues
  } = useForm<Inputs>({
    // mode: "onBlur",
    defaultValues: {
      dni: "",
      dniComplement: "",
      dniIssuedAt: "",
      name: "",
      middlename: "",
      lastname: "",
      gender: "",
      dateOfBirth: "",
      nationality: ""
    }
  })

  const [errorDialogVisible, showErrorDialog] = useState(false)
  
  // const queryClient = useQueryClient()
  
  const findPerson = useQuery(["findPersonByDni"], ()=>{
    return PersonService.findByDni(parseInt(getValues("dni")), getValues("dniComplement"))
      .then((response)=>{
        const person = response.data
        reset({
          dni: String(person.dniNumber),
          dniComplement: person.dniComplement || "",
          dniIssuedAt: person.dniIssuedAt,
          name: person.name,
          middlename: person.middlename,
          lastname: person.lastname,
          dateOfBirth: person.dateOfBirth,
          gender: person.gender,
          nationality: person.nationality
        })        
        props.onComplete(person.id)

        return response
      })
  }, {
    enabled: false,
    refetchOnWindowFocus: false,
  })
  console.log("FindPerson", findPerson)

  const registerPerson = useMutation(PersonService.register)
  
  const newPerson = registerPerson.data?.data

  useEffect(()=>{
    if(newPerson){
      props.onComplete(newPerson.id)
    }
  }, [newPerson])

  useEffect(()=>{
    showErrorDialog(findPerson.isError)
  }, [findPerson.error])

  const notFoundPerson = (findPerson.error as AxiosError)?.response?.status == 404

  const [editable, setEditable] = useState(false)
  useEffect(()=>{
    setEditable(notFoundPerson)
  }, [notFoundPerson])

  return <>
    <Form onSubmit={handleSubmit((fields)=>{
      registerPerson.mutate({
        id: 0,
        dniNumber: parseInt(fields.dni),
        dniComplement: fields.dniComplement,
        dniIssuedAt: fields.dniIssuedAt,
        name: fields.name,
        middlename: fields.middlename,
        lastname: fields.lastname,
        dateOfBirth: fields.dateOfBirth,
        gender: fields.gender,
        nationality: fields.nationality
      })
    })}>
      <Form.Row>
        <Form.Group as={Col} sm={8} md={6}>
          <Form.Label>Documento de identidad</Form.Label>
          <Form.Control type="number" disabled={!!newPerson}
            name="dni"
            ref={register({
              required: { value: true, message: validationMessages.required}
            })}
            onChange={(e)=>{
              // queryClient.invalidateQueries("findPersonByDni")
              reset({
                dni: getValues("dni"),
                dniComplement: getValues("dniComplement"),
                dniIssuedAt: "",
                name: "",
                middlename: "",
                lastname: "",
                dateOfBirth: "",
                gender: "",
                nationality: ""
              })
              setEditable(false)
            }}
          //   value={fields.dni} onChange={(e)=>{
          //   const value = e.target.value
          //   setFields(fields=>({
          //     ...fields,
          //     dni: value
          //   }))
          //   setEditable(false)
          // }}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} sm={4} md={3}>
          <Form.Label>Complemento</Form.Label>
          <Form.Control disabled={!!newPerson}
            name="dniComplement"
            ref={register()}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} sm={4} md={3}>
          <Form.Label>Expedido en</Form.Label>
          <Form.Control as="select" disabled={!editable || !!newPerson} 
            name="dniIssuedAt"
            ref={register({
              required: { value: true, message: validationMessages.required }
            })}
          >
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
      {!newPerson ? <Form.Row>
        <Col className="mb-2">
          <Button onClick={()=>{
            findPerson.refetch()
          }}>
            {findPerson.isFetching ? <Spinner size="sm" animation="border" /> : null}
            <span className="align-middle ml-1">Buscar</span>
          </Button>
        </Col>
      </Form.Row> : null}
      <Form.Row>
        <Form.Group as={Col} lg={4}>
          <Form.Label>Nombres</Form.Label>
          <Form.Control 
            disabled={!editable || !!newPerson}
            name="name"
            ref={register({
              maxLength: {value: 30, message: validationMessages.maxLength.format(30)},
              required: { value: true, message: validationMessages.required}
            })}
          />
        </Form.Group>
        <Form.Group as={Col} lg={4}>
          <Form.Label>Primer Apellido</Form.Label>
          <Form.Control 
            disabled={!editable || !!newPerson} 
            name="middlename"            
            ref={register({
              maxLength: {value: 30, message: validationMessages.maxLength.format(30)},
              required: { value: true, message: validationMessages.required}
            })}
          />
        </Form.Group>
        <Form.Group as={Col} lg={4}>
          <Form.Label>Segundo Apellido</Form.Label>
          <Form.Control disabled={!editable || !!newPerson}          
            name="lastname"            
            ref={register({
              maxLength: {value: 30, message: validationMessages.maxLength.format(30)},
              required: { value: true, message: validationMessages.required}
            })}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md={4}>
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" disabled={!editable || !!newPerson}        
            name="dateOfBirth"            
            ref={register({
              maxLength: {value: 30, message: validationMessages.maxLength.format(30)},
              required: { value: true, message: validationMessages.required}
            })}
          />
        </Form.Group>
        <Form.Group as={Col} xs={6} md={4}>
          <Form.Label>Genero</Form.Label>
          <Form.Control as="select" disabled={!editable || !!newPerson}
            name="gender"            
            ref={register({
              pattern: { value: /M|F/, message: 'Este campo solo admite "Femenino" y "Masculino"'},
              required: { value: true, message: validationMessages.required}
            })}
          >
            <option disabled value=""></option>
            <option value="M">Masculino</option>
            <option value="f">Femenino</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} xs={6} md={4}>
          <Form.Label>Nacionalidad</Form.Label>
          <Form.Control as="select" disabled={!editable || !!newPerson} 
            name="nationality"
            ref={register({
              pattern: { value: /Boliviana|Extranjera/, message: 'Este campo solo admite "Boliviana" y "Extranjera"'},
              required: { value: true, message: validationMessages.required}
            })}
          >
            <option disabled value=""></option>
            <option value="Boliviana">Boliviana</option>
            <option value="Extranjera">Extranjera</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      {editable && !newPerson ? <Form.Row>
        <Col className="mb-2">
          <Button type="submit">
            {registerPerson.isLoading ? <Spinner animation="border" size="sm"/> : null}
            <span className="ml-2">Registrar</span>
          </Button>
        </Col>
      </Form.Row> : null}
    </Form>
    <Modal centered show={errorDialogVisible} onHide={()=>showErrorDialog(false)}>
      <Modal.Header>
        Error
      </Modal.Header>
      <Modal.Body >
        <Alert variant="danger" >          
          {(findPerson.error as any)?.response.data.message}
        </Alert>
      </Modal.Body>
    </Modal>
  </>
}