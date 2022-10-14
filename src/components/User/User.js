import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";
import {PostService} from "../../services";

const User = ({user}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <p>{user.name}</p>

            <button onClick={()=>{
                dispatch(userActions.setCurrentUser(user))
            }}>select</button>

            <button onClick={()=>{
                dispatch(userActions.deleteById(user.id))
            }}>delete</button>

            <button onClick={()=>(
                PostService.getById(user.id).then(({data})=>dispatch(userActions.setUsersPosts(data)))
            )}>show posts</button>
        </div>
    );
};

export {User};