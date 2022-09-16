import React, {useEffect, useState} from 'react';
import {getUsers} from '../../services/api.users.axios'
import User from "../user/User";

const Users = () => {
    let [users, setUsers] = useState([]);
    let [info, setInfo] = useState(null);


    useEffect(() =>{

        getUsers()
            .then(value => {
                setUsers(value.data)
            });
    },[])


    const click = (obj) =>{
        setInfo(obj);
    }

    return (
        <div>
            <div>
                <p>
                    email:
                    {info?.email}
                    <br/>
                    phone:
                    {info?.phone}
                    <br/>
                    address:
                    <br/>
                    street:{info?.address.street}
                    <br/>
                    city:{info?.address.city}
                </p>
            </div>
            <div className="block">
                {users.map((user, index) =>
                (<User
                    key = {index}
                    item = {user}
                    click = {click}/>))
            }
            </div>

        </div>
    );
};

export default Users;