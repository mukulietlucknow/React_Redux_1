import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.INCREMENT:
        return {
            ...state,
            counter: state.counter + 1
        }
        case actionTypes.DECREMENT:
        return {
            ...state,
            counter: state.counter - 1
        }
        case actionTypes.INCREMENT5:  // it canbe done like this as well 
        return updateObject(state , {counter: state.counter + 5})
        return {
            ...state,
            counter: state.counter + 5
        }
        case actionTypes.DECREMENT5:
        return {
            ...state,
            counter: state.counter - 5
        }
    }
    
    return state;
};

export default counterReducer;