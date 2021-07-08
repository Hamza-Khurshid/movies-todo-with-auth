import React, { useState } from "react";
import './style.css';
import axios from 'axios';
import endpoint from "../../constants/endpoint";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";

export default () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { isLoading }  = useSelector(state => state.auth);

    const onSubmit = (e) => {
        e.preventDefault();
        
        let data = {
            email,
            password,
        }

        dispatch(
            login(
                data,
                function() {
                    history.push("/movies")
                } 
            )
        )
    }

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <form className="login-card" onSubmit={onSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label className="label-text">Email address</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control input" placeholder="Enter email" />
                </div>

                <div className="form-group" style={{ marginTop: 10}}>
                    <label className="label-text">Password</label>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="form-control input" placeholder="Enter password" />
                </div>

                <button  style={{ marginTop: 20}} type="submit" className="btn btn-primary btn-block">
                    {
                        isLoading ? 
                            'Loading...'
                        :
                            'Submit'    
                    }
                </button>
                
                <p className="forgot-password text-right">
                    New here? <a href="/register">Sign up</a>
                </p>
            </form>
        </div>
    );
}