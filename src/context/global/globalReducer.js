import { 
    ADD_CONTRACT, 
    TERMINATE_CONTRACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTRACT,
    FILTER_CONTRACT,
    CLEAR_FILTER
} from '../types'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case ADD_CONTRACT:
            return{
                ...state,
                contracts: [...state.contracts, action.payload]
            }
        case TERMINATE_CONTRACT:
            return{
                ...state,
                contracts: state.contracts.filter(contract => contract.id !== action.payload)
            }
        case UPDATE_CONTRACT:
            return{
                ...state,
                contracts: state.contracts.map(contract => contract.id === action.payload.id ? action.payload: contract)
            }
        case FILTER_CONTRACT:
            return{
                ...state,
                filtered: state.contracts.filter(contract => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return contract.firstName.match(regex) || contract.lastName.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        default:
            return state
    }
}
