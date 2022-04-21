import React, {  useState, useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import GlobalContext from '../context/global/globalContext'
import AlertContext from '../context/alert/alertContext'

import AlertMessage from './AlertMessage'

const EditContract = ({ setShow }) => {

    const globalContext = useContext(GlobalContext)
    const { current, updateContract } = globalContext

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    const [formData, setFormData] = useState({
        id: current.id,
        contractType: current.contractType,
        firstName: current.firstName,
        lastName: current.lastName,
        dateOfBirth: current.dateOfBirth,
        position: current.position,
        prefferedFoot: current.prefferedFoot,
        shirtNumber: current.shirtNumber,
        weeklyWages: current.weeklyWages,
        contractLength: current.contractLength,
    })


    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleUpdate = e => {
        updateContract(formData)
        setShow(false)
        setAlert('success', 'Successfully Updated Player Contract!!!')
    }

    // console.log(setShow)

    return (
        <>
            {current && <Form>
                <h6><strong>Contract ID: </strong>{current.id}</h6>
                <AlertMessage />
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    defaultValue={current.firstName}
                                    name='firstName'
                                    onChange={onChange}
                                />
                        </Form.Group>  
                    </Col>    
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    defaultValue={current.lastName}
                                    name='lastName'
                                    onChange={onChange}
                                />
                        </Form.Group>  
                    </Col>    
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Shirt Number #</Form.Label>
                                <Form.Control 
                                    defaultValue={current.shirtNumber}
                                    name='shirtNumber'
                                    onChange={onChange}
                                />
                        </Form.Group>  
                    </Col>    
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Wages</Form.Label>
                                <Form.Control 
                                    defaultValue={current.weeklyWages}
                                    name='weeklyWages'
                                    onChange={onChange}
                                />
                        </Form.Group> 
                    </Col>    
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Wages</Form.Label>
                                <Form.Control 
                                    defaultValue={current.contractLength}
                                    name='contractLength'
                                    onChange={onChange}
                                />
                        </Form.Group> 
                    </Col>    
                </Row>
                <Button variant='primary' className='mx-1' onClick={handleUpdate}>Update</Button>
                {/* <Button variant='danger' className='mx-1' onClick={handleCancel}>Cancel</Button>    */}
            </Form>}
        </>           
    )
}

export default EditContract
