import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Loading() {
    const histroy = useHistory()

    useEffect(() => {
        let token = localStorage.getItem('token', '');

        if(token && token !== "") {
            histroy.push("/movies");
        } else {
            histroy.push("/login");
        }
    }, [])

    return (
        <div>
            <h1 style={{ color: "white" }}>Loading...</h1>
        </div>
    )
}
