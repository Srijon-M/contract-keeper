import React, {useState, useContext} from 'react'
import { Accordion, Card, Row, Col, Button, Modal  } from 'react-bootstrap'

import EditContract from './EditContract'

import GlobalContext from '../context/global/globalContext'
import AlertContext from '../context/alert/alertContext'

const Contract = ( { contract } ) => {

    const globalContext = useContext(GlobalContext)
    const { terminateContract, setCurrent } = globalContext

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    const { id, firstName, lastName, dateOfBirth, prefferedFoot, position, shirtNumber, weeklyWages, contractLength } = contract

    const [show, setShow] = useState(false)

    const handleEdit = () => {
        setShow(true)
        setCurrent(contract)
    }
    const handleClose = () => {
        setShow(false)
    }

    const handleTerminate = () => {
        terminateContract(id)
        setAlert('danger', 'Player Contract Terminated')
    }

    return (
        <>
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey='0'>
                    {firstName+' '+lastName}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                        <Row>
                            <Col md={4}>
                                <p><strong>Date of Birth: </strong>{dateOfBirth}</p>
                                <p><strong>Preferred Foot: </strong>{prefferedFoot}</p>
                                <p><strong>Position: </strong>{position}</p>
                            </Col>
                            <Col md={4}>
                                <p><strong>Shirt Number #: </strong>{shirtNumber}</p>
                                <p><strong>Wages: </strong>$ {weeklyWages}/week</p>
                                <p><strong>Contract Length: </strong>{contractLength} year(s)</p>
                            </Col>
                            <Col md={4}>
                                <Button 
                                    variant='warning' 
                                    className='block-btn my-1'
                                    onClick={handleEdit}
                                >
                                    <i className="far fa-edit mr-2"></i>
                                    Edit Contract
                                </Button>
                                <Button 
                                    variant='danger' 
                                    className='block-btn my-1'
                                    onClick={handleTerminate}
                                >
                                    <i className="far fa-times-circle mr-2"></i>
                                    Terminate Contract
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Modal show={show} size='lg' backdrop="static" keyboard={false} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Contract</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditContract setShow={setShow}/>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default Contract
