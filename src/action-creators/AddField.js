import { ADD_FIELD, EMPTY_VALUE } from '../action-types/ActionTypes'

function addField(value) {
    if(value) {
        return {type: ADD_FIELD, payload: value}
    } else {
        return {type: EMPTY_VALUE}
    }
}

export default addField