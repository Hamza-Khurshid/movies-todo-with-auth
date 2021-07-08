import React, { useState } from "react";
import '../login/style.css';
import axios from 'axios';
import endpoint from "../../constants/endpoint";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { createMovie } from "../../redux/actions/movies";

export default () => {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [image, setImage] = useState(null)

    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();

        formData.append('title', title);
        formData.append('rating', rating);
        formData.append('image', image);

        dispatch(
            createMovie(
                formData,
                () => history.push("/movies")
            )
        )
    }

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <form className="login-card" onSubmit={onSubmit}>
                <h3>Create Movie</h3>

                <div className="form-group">
                    <label className="label-text">Title</label>
                    <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control input" placeholder="Enter title" />
                </div>

                <div className="form-group" style={{ marginTop: 10}}>
                    <label className="label-text">Rating</label>
                    <input value={rating} onChange={e=>setRating(e.target.value)} type="number" className="form-control input" placeholder="Enter rating" />
                </div>

                <div className="form-group" style={{ marginTop: 10}}>
                    <label className="label-text" style={{ marginBottom: 5 }}>Movie Thumbnail</label>
                    <input onChange={e=>setImage(e.target.files[0])} accept="image/x-png,image/jpg,image/jpeg" type="file" className="form-control input" />
                </div>

                <button  style={{ marginTop: 20}} type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <a href="/">Home</a>
                </p>
            </form>
        </div>
    );
}