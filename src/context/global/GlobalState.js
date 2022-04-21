import React, { useReducer } from 'react'
import globalContext from './globalContext'
import globalReducer from './globalReducer'
import { v4 as uuidv4 } from 'uuid'
import { 
    ADD_CONTRACT, 
    TERMINATE_CONTRACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTRACT,
    FILTER_CONTRACT,
    CLEAR_FILTER
} from '../types'

const GlobalState = props => {
    const initialState = {
        contracts: [],
        current: null,
        filtered: null
    }
    const [state, dispatch] = useReducer(globalReducer, initialState)

    //Add a player's contract
    const addContract = contract => {
        contract.id = uuidv4()
        dispatch({
            type: ADD_CONTRACT,
            payload: contract
        })
    }

    //Delete a player's contract
    const terminateContract = id => {
        dispatch({
            type: TERMINATE_CONTRACT,
            payload: id
        })
    }

    //set current value
    const setCurrent = contract => {
        // console.log(contract)
        dispatch({
            type: SET_CURRENT,
            payload: contract
        })
    }

    //clear current value
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT
        })
    }

    //update player's contract
    const updateContract = contract => {
        dispatch({
            type: UPDATE_CONTRACT,
            payload: contract
        })
    }

    //Filter Contracts
    const filterContracts = text => {
        dispatch({
            type: FILTER_CONTRACT,
            payload: text
        })
    }

    //Clear filter
    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER
        })
    }
    
    return (
        <globalContext.Provider
            value={{
                contracts: state.contracts,
                current: state.current,
                filtered: state.filtered,
                addContract,
                terminateContract,
                setCurrent,
                clearCurrent,
                updateContract,
                filterContracts,
                clearFilter
            }}
        >
            {props.children}
        </globalContext.Provider>        
    )
}

export default GlobalState

