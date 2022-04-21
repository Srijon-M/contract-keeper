import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import GlobalContext from '../context/global/globalContext' 
import AlertContext from '../context/alert/alertContext'

import AlertMessage from './AlertMessage'
 
const AddContract = () => {

    const history = useHistory()

    const globalContext = useContext(GlobalContext)
    const { addContract } = globalContext

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    const [contractType, setContractType] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [prefferedFoot, setPrefferedFoot] = useState('')
    const [position, setPosition] = useState('')
    const [shirtNumber, setShirtNumber] = useState('')
    const [weeklyWages, setWeeklyWages] = useState('')
    const [contractLength, setContractLength] = useState('')

    const contractData = { contractType, firstName, lastName, dateOfBirth, prefferedFoot, position, shirtNumber, weeklyWages, contractLength }

    const addPlayer = e => {
        e.preventDefault()
        if(contractType === '' || firstName === '' || lastName === '' || dateOfBirth === '' || prefferedFoot === '' || shirtNumber === '' || position === '' || weeklyWages === '' || contractLength === ''){
            setAlert('danger', 'Please fill out all the form fields')
        } else {
            addContract(contractData)
            history.push('/')
            setAlert('success', 'Player contract added successfully')
        }
    }

    const handleReset = e => {
        setContractType('')
        setFirstName('')
        setLastName('')
        setDateOfBirth('')
        setPrefferedFoot('')
        setPosition('')
        setShirtNumber('')
        setWeeklyWages('')
        setContractLength('')
    }
    

    return (
        <>
            <Link to='/'>
                <Button variant='outlined-secondary' className='my-1 mx-2'>
                    <i className="fas fa-arrow-left mr-1"></i>
                    Go back
                </Button>
            </Link>
            <Container className='my-2'>
                <div>
                    <AlertMessage />
                </div>
                <h1>Contract Form</h1>
                <Form>
                    <Row className='my-2'>
                        <Col md={12}>
                            <Form.Label>Select Contract-Type</Form.Label>
                            <Form.Control 
                                as="select"
                                defaultValue={contractType}
                                onChange={e => setContractType(e.target.value)}
                            >
                                <option>--Contract Type--</option>
                                <option value='loan'>Loan</option>
                                <option value='permanent'>Permanent</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className='my-2'>
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Player First Name' 
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}    
                                />
                            </Form.Group>
                        </Col>    
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    placeholder='Player Last Name' 
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}    
                                />    
                            </Form.Group>
                        </Col>    
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control 
                                    type='date' 
                                    placeholder='First Name' 
                                    value={dateOfBirth}
                                    onChange={e => setDateOfBirth(e.target.value)}     
                                />
                            </Form.Group>
                        </Col>    
                    </Row>
                    <Row className='my-2'>
                        <Col md={4}>
                            <Form.Label>Prefferd Foot</Form.Label>
                            <Form.Control 
                                as="select"
                                defaultValue={prefferedFoot}
                                onChange={e => setPrefferedFoot(e.target.value)}    
                            >
                                <option>--Strong Foot--</option>
                                <option value='left'>Left</option>
                                <option value='right'>Right</option>
                            </Form.Control>
                        </Col>    
                        <Col md={4}>
                            <Form.Label>Position</Form.Label>
                            <Form.Control 
                                as="select"
                                defaultValue={position}
                                onChange={e => setPosition(e.target.value)}    
                            >
                                <option>--Position--</option>
                                <option value='Forward'>Forward</option>
                                <option value='Mid field'>Mid field</option>
                                <option value='Defence'>Defence</option>
                                <option value='Goal'>Goal</option>
                            </Form.Control>
                        </Col>    
                        <Col md={4}>
                        <Form.Group>
                                <Form.Label>Shirt #</Form.Label>
                                <Form.Control 
                                    type='number' 
                                    placeholder='Player Shirt Number' 
                                    value={shirtNumber}
                                    onChange={e => setShirtNumber(e.target.value)}
                                />
                            </Form.Group>
                        </Col>    
                    </Row>
                    <Row className='my-2'>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Wages/ week</Form.Label>
                                <Form.Control 
                                    type='number' 
                                    placeholder='$' 
                                    value={weeklyWages}
                                    onChange={e => setWeeklyWages(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Contract Length</Form.Label>
                                <Form.Control 
                                    type='number' 
                                    placeholder='Years...' 
                                    value={contractLength}
                                    onChange={e => setContractLength(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Button variant='primary' className='mx-1' onClick={addPlayer}>Submit</Button>
                            <Button variant='danger' className='mx-1' onClick={handleReset}>Reset</Button>
                        </Col>
                    </Row>
                </Form> 
            </Container>
        </>
    )
}

export default AddContract
