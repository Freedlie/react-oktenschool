import {useReducer} from "react";
import {ADD, DELETE} from "./count.actions";

let id = 0 ;

const reducer = (state, action) =>{
    const {payload} = action;
// eslint-disable-next-line default-case
    switch (action.type){
        case ADD:
            id++;
            return {...state, cats: [...state.cats, {name: payload, id: id}]};
        case DELETE:
            const index = state.cats.findIndex(n => n.id === id);
            if (index !== -1) {
               return {...state, cats:[state.cats.splice(index, 1)]};
            }
    }
    return {...state}
}

const useCatReducer =()=> useReducer(reducer,{cats:[]});

export {
    useCatReducer,
}