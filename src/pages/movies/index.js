import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import endpoint from '../../constants/endpoint'

const data = [
    {
        id: "2cv1b65df4g65dfg16df54g1",
        title: "Fast & Furious 9",
        image: "https://i.ytimg.com/vi/fEE4RO-_jug/maxresdefault.jpg",
        rating: 9
    },
    {
        id: "f498sd4f3sd13sd1v",
        title: "Shaadi",
        image: "https://i.ytimg.com/vi/5o_sGQFrKDo/maxresdefault.jpg",
        rating: 7
    },
    {
        id: "s4fg98s4d6sdf65s46sdf",
        title: "Die hard",
        image: "https://assets-prd.ignimgs.com/2021/05/26/summer2021movies-slideshow-1622071339967.jpg",
        rating: 6
    },
    {
        id: "",
        title: "Loor move",
        image: "https://i.ytimg.com/vi/VlsQC87i06w/maxresdefault.jpg",
        rating: 2
    },
]

export default function Movies() {
    const history = useHistory()
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
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
                setMovies(response.data.movies)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log("Movies error: ", err)
            })
    }, [])

    return (
        <div>
            <button id="create-movie-button" onClick={()=>history.push("/createMovie")}>Create Movie</button>
                
            {
                loading ? 
                    <h1>Loader....</h1>
                :    
                    movies.map(movie => (
                        <MovieItem key={movie._id} movie={movie} />
                    ))
            }
        </div>
    )
}
