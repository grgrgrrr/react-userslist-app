import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import usersReducer from './users';

// main reducers
export const reducers = combineReducers({
    routing: routerReducer,
    users: usersReducer,
    test: (state="test", action) => state
});
