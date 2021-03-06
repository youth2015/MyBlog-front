import {handleActions} from 'redux-actions';
import {REQUEST_SUCCESS} from '../action/actionType';

const initState = {
    data:[],
    loginState: false
};

const reducer = handleActions({
    REQUEST_LOGIN: (state,action) => ({
        ...state, data: action.payload
    }),
    REQUEST_SUCCESS: (state, action) => ({
        ...state,loginState: action.payload
    }),
    REQUEST_ERR: (state, action) => ({
        ...state,loginState: action.payload
    }),
}, initState);

export default {initState, reducer};