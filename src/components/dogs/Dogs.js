import React, {useRef} from 'react';
import {ADD,  useDogReducer} from "../../reducers";
import {CreateDog} from "../createDog/createDog";

const Dogs = () => {
    let [state, dispatch] = useDogReducer();

    let setDog = useRef(null);

    return (
        <div className='dog'>
            <div>
                <p>Add dog:</p>
                <label><input type="text" ref = {setDog}/></label>
                <button onClick={()=>{
                    dispatch({type: ADD, payload: setDog.current.value})
                }}
                >Save</button>
            </div>
            <hr/>
            <div >
                {
                    state.dogs.map((dog,index)=>(<CreateDog key={index} dog={dog} setDog={setDog} dispatch={dispatch}/>))
                }
            </div>
        </div>
    );
};

export {Dogs}