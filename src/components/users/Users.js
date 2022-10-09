import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services/users.service";
import {ADD_USERS} from "../../actions/actions";
import {User} from "../user/User";

const Users = () => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();


    useEffect(()=>{
        userService.getAll().then(({data})=> dispatch({type:ADD_USERS, payload : data})

        )},[dispatch])

    return (
        <div>
            {
                state?.users && state.users.map((user,index) => (<User key={index} user={user}/>))
            }

        </div>
    );
};

export {Users};
