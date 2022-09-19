import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/api.info.axios";
import User from "../user/User";

const Users = () => {
    let {users, setUsers} = useState([]);

    useEffect(()=>{
        getUsers()
            .then(value => (setUsers(value.data)))
    },[])

    return (
        <div>
            <div>
                {users.map((user, index) => (
                    <User
                     key = {index}
                     user = {user}/>
                ))}
            </div>
        </div>
    );
};

export default Users;