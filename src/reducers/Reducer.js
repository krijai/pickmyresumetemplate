import { ADD_FIELD, EMPTY_VALUE } from '../action-types/ActionTypes'

const initialState = [];

function addNewField(state = initialState, action) {
    switch(action.type) {
        case ADD_FIELD:
            return [...state, {id: 1, value: action.payload}]
        case EMPTY_VALUE:
            return state
        default:
            return state
    }
}

export default addNewField