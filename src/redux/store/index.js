import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import auth from '../reducers/auth';
import movies from '../reducers/movies';

const rootReducer = combineReducers({
    auth,
    movies,
});

const getMiddleware = () => {
    const middleware = [reduxThunk];
  
    return applyMiddleware(...middleware);
};

export default createStore(rootReducer, getMiddleware());