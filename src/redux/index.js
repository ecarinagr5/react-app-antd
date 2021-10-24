import { createStore } from 'redux'

//Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const actionTypes = {
    INCREMENT,
    DECREMENT
}

//Initial State
const initialState = {
    counter:0
}

//Reducer
const operationReducer = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {...state, counter: ++state.counter}
        case actionTypes.DECREMENT:
            return{...state, counter: --state.counter}
        default:
            return state;
    }
}

//Store
const store = createStore( operationReducer );

export default store;