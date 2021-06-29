import React from "react";
import '../login/style.css';

export default () => {
    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <form className="login-card">
                <h3>Edit Movie</h3>

                <div className="form-group">
                    <label className="label-text">Title</label>
                    <input type="text" className="form-control input" placeholder="Enter title" />
                </div>

                <div className="form-group" style={{ marginTop: 10}}>
                    <label className="label-text">Rating</label>
                    <input type="number" className="form-control input" placeholder="Enter rating" />
                </div>

                <div className="form-group" style={{ marginTop: 10}}>
                    <label className="label-text" style={{ marginBottom: 5 }}>Movie Thumbnail</label>
                    <input accept="image/x-png,image/jpg,image/jpeg" type="file" className="form-control input" />
                </div>

                <button  style={{ marginTop: 20}} type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <a href="/">Home</a>
                </p>
            </form>
        </div>
    );
}