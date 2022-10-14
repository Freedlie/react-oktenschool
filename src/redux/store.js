import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer
});

const setUpStore =() => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}