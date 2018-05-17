import axios from 'axios';

const initialState = {
    user: {}
}

const GET_USER = 'GET_USER';

export function getUser() {
    let userData = axios.get('/auth/me').then( res => {
        return res.data;
    })
    return {
        type: GET_USER,
        payload: userData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})
        // case GET_USER + '_PENDING':
        // case GET_USER + '_REJECTED':
        default:
          return state;
    }
}