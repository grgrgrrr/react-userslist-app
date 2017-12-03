import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import usersReducer from './users';
import albumsReducer from './albums';
import photosReducer from './photos';

// main reducers
export const reducers = combineReducers({
    routing: routerReducer,
    users: usersReducer,
    albums: albumsReducer,
    photos: photosReducer,
    test: (state="test", action) => state
});
