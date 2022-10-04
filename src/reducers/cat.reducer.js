import {useReducer} from "react";
import {ADD} from "./dog.reducer";


const state = (initialValue) =>{
    return {cats:initialValue};
}

const reducer = (state, action) =>{
// eslint-disable-next-line default-case
switch (action.type){
    case ADD:
        return {cats: state.cats + 1}
}
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const catReducer =()=> useReducer(reducer,[],state);

export {
    catReducer
}