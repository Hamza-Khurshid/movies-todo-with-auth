import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from "../pages/login"
import Register from "../pages/register"
import Movies from "../pages/movies"
import CreateMovie from "../pages/movies/CreateMovie"
import EditMovie from "../pages/movies/EditMovie"
import Loading from '../pages/loading';

export default function Routing() {

    const PrivateRoute = ({ component: Component, ...rest }) => {
        let token = localStorage.getItem('token', '');

        if(token && token !== '') {
            return <Route  {...rest} render={(props) => (<Component {...props} />)} />
        } else {
            return <Redirect to='/login' />
        }
    }

    return (
        <Router>

            <Switch>
                <Route exact path="/" component={Loading} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <PrivateRoute path="/movies" component={Movies} />
                <PrivateRoute path="/createMovie" component={CreateMovie} />
                <PrivateRoute path="/editMovie" component={EditMovie} />
            </Switch>

        </Router>
    )
}
