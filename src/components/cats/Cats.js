import React, {useRef} from 'react';
import {ADD, useCatReducer} from "../../reducers";
import {CreateCat} from "../createCat/CreateCat";

const Cats = () => {

    let [state, dispatch] = useCatReducer();

    let setCat = useRef(null);

    return (
        <div className='cat'>
            <div>
                    <p>Add cat:</p>
                    <label><input type="text" ref = {setCat}/></label>
                    <button onClick={()=>{
                        dispatch({type: ADD, payload: setCat.current.value})
                    }}
                    >Save</button>
            </div>
            <hr/>
            <div>
                {
                    state.cats.map((cat,index)=>(<CreateCat key={index} cat={cat} setCat={setCat} dispatch={dispatch}/>))

                }

            </div>


        </div>
    );
};

export {Cats}