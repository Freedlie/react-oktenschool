import {useReducer} from "react";
import {ADD, DELETE} from "./count.actions";

let id = 0 ;

const reducer = (state, action) =>{
    const {payload} = action;
// eslint-disable-next-line default-case
    switch (action.type){
        case ADD:
            id++;
            return {...state, dogs: [...state.dogs, {name: payload, id: id}]};
        case DELETE:
            const index = state.dogs.findIndex(n => n.id === id);
            if (index !== -1) {
                return {...state, dogs:[state.dogs.splice(index, 1)]};
            }
    }
    return {...state}
}

const useDogReducer =()=> useReducer(reducer,{dogs:[]});

export {
    useDogReducer
}
