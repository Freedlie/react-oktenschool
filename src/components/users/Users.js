import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../services/users.service";
import {ADD_USERS} from "../../actions/actions";

const Users = () => {
    let state = useSelector(state => state);
    let dispatch = useDispatch()


    useEffect(()=>{
        userService.getAll().then(({data})=> dispatch({type:ADD_USERS, payload : data})

        )},[dispatch])

    return (
        <div>

        </div>
    );
};

export {Users};