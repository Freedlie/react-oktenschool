import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/api.info.axios";
import User from "../user/User";

const Users = (props) => {
    let {getPostsById} = props;

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers()
            .then(value => {
                setUsers(value.data);
            })
    },[])

    return (
        <div>
            <div>
                {users.map((user, index) => (
                    <User
                        key = {index}
                        user = {user}
                        getPostsById ={getPostsById}/>
                ))}
            </div>
        </div>
    );
};

export default Users;