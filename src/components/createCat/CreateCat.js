import React from 'react';
import {DELETE} from "../../reducers";

const CreateCat = ({cat,setCat,dispatch}) => {
    return (
        <div>
            <p>{cat.name}</p>
            <button onClick={()=>{
                dispatch({type: DELETE ,payload: cat.id})
            }}>delete</button>
        </div>
    );
};

export {CreateCat}