import React from 'react'
import './style.css'
import endpoint from '../../constants/endpoint'


export default function MovieItem({ movie }) {
    return (
        <div className="movie-item-container">
            <h3>
                Movie: {movie.title}
            </h3>

            <div>
                <h5>Rating: {movie.rating}</h5>
            </div>
            <div className="actions-view">
                <button>Edit</button>
                <button>Delete</button>
            </div>

            <img src={endpoint + "/" + movie.image} className="movie-image" />
        </div>
    )
}
