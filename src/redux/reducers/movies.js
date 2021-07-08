import { GET_MOVIES, MOVIES_LOADING,CREATE_MOVIES } from "../ActionTypes";

const initState = {
    isLoading: false,
    movies: [],
}

export default function moviesReducer(state=initState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
            };
    
        case MOVIES_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case CREATE_MOVIES: {
            let newMovies = state.movies;
            newMovies.push(action.payload)
            
            return {
                ...state,
                movies: newMovies,
                isLoading: false,
            }
        }

        default:
            return state;
    }
}