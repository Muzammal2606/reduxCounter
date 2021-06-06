import {ADD_COUNTER, MIN_COUNTER, RESET_COUNTER} from "../../constants/type";



export function counterReducer(state ={count:0}, action) {
    switch (action.type) {
        case ADD_COUNTER:
            let increment ={
                ...state,
                count:state.count + 1
            }
            return increment
        case MIN_COUNTER:
            let decrement = {
                ...state,
                count:state.count - 1
            }
            return decrement
        case RESET_COUNTER:
            let reset = {
                ...state,
                count: 0
            }
            return reset
        default:
            return state
    }
}
