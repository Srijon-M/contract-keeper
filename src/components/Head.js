import React, { useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

import GlobalContext from '../context/global/globalContext'

const Head = () => {

    const text = useRef()

    const globalContext = useContext(GlobalContext)
    const { filterContracts, clearFilter, filtered } = globalContext

    useEffect(() => {
        if(filtered === null){
            text.current.value = ''
        }
    }, [globalContext, filtered])

    const changeHandler = e => {
        if(text.current.value !== ''){
            filterContracts(e.target.value)
        } else {
            clearFilter()
        }
    }

    return (
        <>
            <Navbar variant='dark' bg='dark'>
                <Navbar.Brand>Contract Keeper</Navbar.Brand>
                <Nav>
                    <Link to='/add'>
                        <Button variant='primary'>Add Player's Contract</Button>
                    </Link>
                </Nav>
                <Nav className='ml-auto'>
                    <Form inline>
                        <FormControl
                            ref={text} 
                            type="text" 
                            placeholder="Search" 
                            className="mr-sm-2"
                            onChange={changeHandler}
                        />
                    </Form>
                </Nav>
            </Navbar>  
        </>
    )
}

export default Head
