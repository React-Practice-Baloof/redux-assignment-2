import {ADD_PERSON, DELETE_PERSON} from '../action';

const nameInitialState = {
    data:[]
}

const reducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state,
                data:[...state.data].concat(action.payload)
            }
        case DELETE_PERSON:
            return {
                ...state,
                data:[...state.data].filter(person => person.id !== action.payload)
            }
        default:
            return state
    }
}

export default reducer