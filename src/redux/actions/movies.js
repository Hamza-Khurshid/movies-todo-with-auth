import axios from "axios";
import endpoint from "../../constants/endpoint";
import { CREATE_MOVIES, GET_MOVIES, MOVIES_LOADING } from "../ActionTypes";

export const getMovies = () => dispatch => {
    dispatch({ type: MOVIES_LOADING, payload: true });

    let token = localStorage.getItem('token', '');

    var config = {
        method: 'get',
        url: endpoint + `/movie/list`,
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        }
    };

    axios(config)
        .then(response => {
            console.log("Response: ", response)
            
            dispatch({
                type: GET_MOVIES,
                payload: response.data.movies
            })
        })
        .catch(err => {
            console.log("Error: ", err)
            alert('Error while logging in!')
            dispatch({ type: MOVIES_LOADING, payload: false });
        })
}


export const createMovie = (data, cb) => dispatch => {
    dispatch({ type: MOVIES_LOADING, payload: true });

    let token = localStorage.getItem('token', '')
    var config = {
        method: 'post',
        url: endpoint + `/movie/create`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    };

    axios(config)
        .then(response => {
            alert('Movie created successfully!')

            dispatch({
                type: CREATE_MOVIES,
                payload: response.data.movie
            })
            cb();

        })
        .catch(err => {
            console.log("Error: ", err)
            alert('Error while creating movie!')
            dispatch({ type: MOVIES_LOADING, payload: false });
        })
}