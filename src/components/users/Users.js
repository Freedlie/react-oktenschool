import React, {useEffect, useState} from 'react';

// import {getUsers} from "../../services/api.info.axios";
import User from "../user/User";

const Users = () => {
    let {users, setUsers} = useState([]);

    useEffect(()=>{
        // getUsers()
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => (setUsers(value.data)))
    })

    return (
        <div>
            <div>hello</div>
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