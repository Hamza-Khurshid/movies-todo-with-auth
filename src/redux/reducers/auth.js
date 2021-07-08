import { LOGIN, LOGIN_LOADING } from "../ActionTypes";

const initState = {
    isLoading: false,
    user: null,
}

export default function authReducer(state=initState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            };
    
        case LOGIN_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
            break;

        default:
            return state;
    }
}