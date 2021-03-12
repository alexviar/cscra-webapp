import React, { useCallback, useEffect } from 'react'
import { Modal, Button, Form, Row, Col, ListGroup, InputGroup, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getWageForm, getCalculationMethods, getWages, getDeductions, getApplicableDeductions, getPayrollTypes } from '../selectors/inputSelectors'
import { v4 as uuidv4 } from 'uuid'

export const WageForm = () => {
  const dispatch = useDispatch()
  const { action, id } = useParams<{
    action: string,
    id: string
  }>()
  const { fields, info: fieldsInfo } = useSelector(getWageForm)
  console.log(fields)
  const calculationMethods = useSelector(getCalculationMethods)
  const payrollTypes = useSelector(getPayrollTypes)
  const wage = useSelector(getWages).find(w=>w.id == id as unknown)
  const applicableDeductionIds = useSelector(getApplicableDeductions).filter(ad=>ad.wageId == wage?.id).map(ad=>ad.deductionId)
  const deductions = useSelector(getDeductions).sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
  const history = useHistory()
  console.log(wage)
  useEffect(()=>{
    if(wage){
      dispatch({
        type:"UPDATE_WAGE_FORM",
        payload: {
          fields: {
            name: wage.name,
            description: wage.description,
            inForce: wage.inForce,
            payrollTypeId: wage.payrollTypeId,
            calculationMethodId: wage.calculationMethodId,
            formula: wage.formula,
            applicableDeductionIds: applicableDeductionIds
          }
        }
      })
    }
    else{
      dispatch({
        type:"RESET_WAGE_FORM"
      })
    }
  }, [id])

  const goBack = useCallback(() => {
    console.log(history.location)
    if (!history.location.state)
      history.replace("/rrhh/nominas/percepciones")
    else
      history.goBack()
  }, [])


  const updateForm = (field: keyof typeof fields, value: string) => {
    dispatch({
      type: "UPDATE_WAGE_FORM",
      payload: {
        fields: {
          ...fields,
          [field]: value
        }
      }
    })
  }

  const onChange = (field: keyof typeof fields) => (e: any) => {
    const value = e.target.value
    updateForm(field, value)
  }

  return <Modal show={true} centered onHide={goBack}>
    <Modal.Header closeButton>
      <Modal.Title>{`${id ? "Editar" : "Crear"} Percepción`}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form id="wage-form" onSubmit={(e) => {
        e.preventDefault()
        const wageId =  action == 'crear' ? uuidv4().replaceAll('-', '') : id
        dispatch({
          type: action == 'crear' ? 'ADD_WAGE_TYPE' : 'EDIT_WAGE_TYPE',
          payload: {
            wage: {
              id: wageId,
              name: fields.name,
              description: fields.description,
              inForce: fields.inForce,
              formula: fields.formula,
              payrollTypeId: parseInt(fields.payrollTypeId),
              calculationMethodId: parseInt(fields.calculationMethodId),
            },
            applicableDeductions: fields.applicableDeductionIds.map(deductionId => {
              return {
                deductionId,
                wageId
              }
            })
          }
        })
        goBack()
      }}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={fields.name} onChange={onChange("name")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" value={fields.description} onChange={onChange("description")} />
        </Form.Group>
        <Form.Check className="mb-3" type="checkbox" label="Vigente" checked={fields.inForce} onChange={(e)=>{
          dispatch({
            type: "UPDATE_WAGE_FORM",
            payload: {
              fields: {
                ...fields,
                inForce: e.target.checked
              }
            }
          })
        }}/>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Tipo de nomina</Form.Label>
            <Form.Control as="select" value={fields.payrollTypeId} onChange={onChange("payrollTypeId")} >
              <option></option>
              {
                payrollTypes.map(pt => {
                  return <option key={pt.id} value={pt.id}>{pt.name}</option>
                })
              }
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Metodo de cálculo</Form.Label>
            <Form.Control as="select" value={fields.calculationMethodId} onChange={(e) => {
              const value = e.target.value
              dispatch({
                type: "UPDATE_WAGE_FORM",
                payload: {
                  fields: {
                    ...fields,
                    calculationMethodId: value
                  },
                  info: {
                    ...fieldsInfo,
                    calculationMethodId: calculationMethods.find(cm => cm.id == parseInt(value))?.description
                  }
                }
              })
            }} >
              <option>¿Cómo debe calcularse?</option>
              {calculationMethods.map(cm => (
                <option key={cm.id} value={cm.id}>{cm.name}</option>
              ))}
            </Form.Control>
            {/* <Form.Text>{fieldsInfo.calculationMethodId}</Form.Text> */}
          </Form.Group>
        </Row>
        {fields.calculationMethodId == "1" ? <Form.Group>
          <Form.Label>Formula</Form.Label>
          <Form.Control type="text" value={fields.formula} onChange={onChange("formula")} />
        </Form.Group> : null}
        {/* {fields.calculationMethodId == "1" ? <Form.Group>
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="number" value={fields.amount} onChange={onChange("amount")} />
        </Form.Group> :
          fields.calculationMethodId == "2" ? <>
            <label>Porcentaje</label>
            <InputGroup className="mb-3">
              <FormControl
                className="text-right"
                // placeholder="Recipient's username"
                // aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="number" value={fields.percentage} onChange={onChange("percentage")}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </> : null} */}
        <span className="mb-2">Descuentos que se aplicarán</span>
        <ListGroup as="ul" className="overflow-auto border flex-grow-1" variant="flush" style={{height: "10rem"}}>
          {deductions.map(d=>{
            return <ListGroup.Item key={d.id} as="li" className="py-2 px-3" action>
              <Form.Check type="checkbox"
                label={d.name}
                checked={fields.applicableDeductionIds.some(id=>id == d.id)}
                onChange={(e)=>{
                  console.log(e.target.checked)
                  let newSelection; // = [...fields.applicableDeductionIds]
                  if(e.target.checked){
                    if(!fields.applicableDeductionIds.some(id=>id==d.id)){
                      newSelection = [...fields.applicableDeductionIds]
                      newSelection.push(d.id)
                    }
                  }
                  else{
                    newSelection = fields.applicableDeductionIds.filter(id => id != d.id)
                  }
                  fields.applicableDeductionIds.filter(id => id)
                  dispatch({
                    type: "UPDATE_WAGE_FORM",
                    payload: {
                      fields: {
                        ...fields,
                        applicableDeductionIds: newSelection
                      }
                    }
                  })

              }}/>
            </ListGroup.Item>
          })}
        </ListGroup>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={goBack}>
        Cancelar
      </Button>
      <Button variant="primary" form='wage-form' type="submit">
        Guardar
      </Button>
    </Modal.Footer>
  </Modal>
}