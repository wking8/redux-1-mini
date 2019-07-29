import { createStore } from 'redux'


// Initialize State
const initialState = {
    currentValue: 0
}

// Actions Constants
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// Reducer
function countReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, currentValue: state.currentValue + action.payload }
        case DECREMENT:
            return { ...state, currentValue: state.currentValue - action.payload }
        default: return state
    }
}


// export Store
export default createStore(countReducer)