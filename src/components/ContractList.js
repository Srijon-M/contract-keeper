import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GlobalContext from '../context/global/globalContext'

import Head from './Head'
import Contract from './Contract'
import AlertMessage from './AlertMessage'

const ContractList = () => {

    const globalContext = useContext(GlobalContext)
    const { contracts, filtered } = globalContext

    // console.log(filtered)

    return (
        <>
            <Head/>
            <Container className='my-1 py-1'>
                <AlertMessage />
                <h4 className='my-1 py-1'>List of player's contracts</h4>
                <Row className='my-1 py-1'>
                    {filtered !== null ? filtered.map(contract => (
                        <Col md={12} key={contract.id}>
                            <Contract contract={contract} />
                        </Col>
                    )) : contracts.length > 0 ? contracts.map(contract => (
                        <Col md={12} key={contract.id}>
                                <Contract contract={contract} />
                        </Col>
                    )) : <h6 className='heading'>No player contracts available...</h6>}
                </Row>
            </Container>
        </>
    )
}

export default ContractList
