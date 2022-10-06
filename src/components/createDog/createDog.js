import React from 'react';
import {DELETE} from "../../reducers";

const CreateDog = ({dog,dispatch}) => {
    return (
        <div>
            <p>{dog.name}</p>
            <button onClick={()=>{
                dispatch({type: DELETE ,payload: dog.id})
            }}>delete</button>
        </div>
    );
};

export {CreateDog};