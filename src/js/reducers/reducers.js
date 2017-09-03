import { SEARCH, RECEIVE_PATH, CLEARFIELD,
       CLEAR, INPROGRESS, INVALID } from '../actions/types';

export default function reducer(state={
    number: '',
    path: '',
    status: CLEAR
}, action) {
    switch (action.type) {
        case SEARCH:
            return Object.assign({}, state, {
                number: action.number,
                status: action.status
            });
        case RECEIVE_PATH:
        return Object.assign({}, state, {
            number: action.number,
            status: action.status,
            path: action.path
        });
        case CLEARFIELD:
        return Object.assign({}, state, {
            number: action.number,
            status: action.status,
            path: action.path
        });
    
        default:
            return state;
    }
}