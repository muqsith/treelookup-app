import { SEARCH, RECEIVE_PATH, CLEAR,
        INVALID, INPROGRESS, FOUND, NOTFOUND} from './types';

export function search(number) {
    return ({
        type: SEARCH,
        status: INPROGRESS,
        number
    });
};

export function receivePath(number, path) {
    return ({
        type: RECEIVE_PATH,
        status: (path) ? FOUND : NOTFOUND,
        number,
        path
    });
};

export function searchNumberAsync(number) {
    return function(dispatch, getState) {
        dispatch(search(number));
        treesearch.breadthfirst_callback(number, (result) => {
            dispatch(receivePath(number, result));
        });
    }
};

export function clear() {
    return ({
        type: CLEAR,
        status: INVALID,
        number:'',
        path:''
    });
};