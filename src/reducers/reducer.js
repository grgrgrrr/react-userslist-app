import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// main reducers
export const reducers = combineReducers({
    routing: routerReducer,
    test: (state="test", action) => state
});
