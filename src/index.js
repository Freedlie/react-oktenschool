import React, {useReducer} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {ADD_COMMENTS, ADD_POSTS, ADD_USERS} from "./actions/actions";
import './index.css';
import App from './App';


const store = createStore((state = {users:[], posts:[], comments:[]}, action)=>{
    switch (action.type){
        case ADD_USERS:
            return {
                ...state, users: action.payload
            }
        case ADD_POSTS:
            return {
                ...state, posts: action.payload
            }
        case ADD_COMMENTS:
            return {
                ...state, comments: action.payload
            }
    default:
}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
