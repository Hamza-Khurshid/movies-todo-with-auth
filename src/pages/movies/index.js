import React, { useEffect } from 'react'
import MovieItem from './MovieItem'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../redux/actions/movies'

export default function Movies() {
    const history = useHistory()

    const dispatch = useDispatch();
    const { isLoading, movies } = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(
            getMovies()
        )
    }, [])

    const logout = () => {
        localStorage.clear();
        history.push("/login");
    }

    return (
        <div>
            <button id="create-movie-button" onClick={()=>history.push("/createMovie")}>Create Movie</button>
            <button id="create-movie-button" style={{ marginLeft: 10 }} onClick={logout}>Logout</button>
                
            {
                isLoading ? 
                    <h1>Loader....</h1>
                :    
                    movies.map(movie => (
                        <MovieItem key={movie._id} movie={movie} />
                    ))
            }
        </div>
    )
}
