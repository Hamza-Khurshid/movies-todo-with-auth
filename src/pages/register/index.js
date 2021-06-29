import React, { useState } from "react";
import '../login/style.css';
import axios from 'axios';
import endpoint from "../../constants/endpoint";

export default () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        
        let data = {
            name,
            email,
            phone,
            password,
            image
        }
        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('password', password);
        formData.append('image', image);

        axios.post(endpoint + "/user/register", data)
            .then(response => {
                alert('User registered successfully!')
            })
            .catch(err => {
                console.log("Error: ", err)
                alert('Error while registering!')
            })
    }

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <form className="login-card" onSubmit={onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label className="label-text">Name</label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" className="form-control input" placeholder="Enter name" />
                </div>

                <div className="form-group" style={{ marginTop: 10}}>
                    <label className="label-text">Email</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control input" placeholder="Enter email" />
                </div>

                <div className="form-group" style={{ marginTop: 10}}>
                    <label className="label-text">Phone</label>
                    <input value={phone} onChange={e=>setPhone(e.target.value)} type="text" className="form-control input" placeholder="Enter phone" />
                </div>

                <div className="form-group" style={{ marginTop: 10}}>
                    <label className="label-text">Password</label>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="form-control input" placeholder="Enter password" />
                </div>

                <div className="form-group" style={{ marginTop: 10}}>
                    <label className="label-text" style={{ marginBottom: 5 }}>Profile Image</label>
                    <input onChange={e=>setImage(e.target.files[0])} accept="image/x-png,image/jpg,image/jpeg" type="file" className="form-control input" />
                </div>

                <button style={{ marginTop: 20}} type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">log in?</a>
                </p>
            </form>
        </div>
    );
}