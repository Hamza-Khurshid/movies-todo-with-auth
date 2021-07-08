import axios from "axios";
import endpoint from "../../constants/endpoint";
import { LOGIN, LOGIN_LOADING } from "../ActionTypes";

export const login = (data, cb) => dispatch => {
    dispatch({ type: LOGIN_LOADING, payload: true });

    axios.post(endpoint + "/user/login", data)
        .then(response => {
            console.log("Response login: ", response)
            localStorage.setItem('token', response.data.token);

            dispatch({
                type: LOGIN,
                payload: response.data.user
            })

            cb();
        })
        .catch(err => {
            console.log("Error: ", err)
            alert('Error while logging in!')
            dispatch({ type: LOGIN_LOADING, payload: false });
        })
}