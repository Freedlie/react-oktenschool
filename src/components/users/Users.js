import React, {useEffect, useState} from 'react';

import {getUsers} from '../../services/api.users.axios'
import User from "../user/User";
import Userinfo from "../userInfo/Userinfo";

const Users = () => {
    let infoId = 0;

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
        infoId++;
    }

    return (
        <div>
            <div>
                <Userinfo
                        info ={info}
                        key ={infoId}/>
            </div>
            <div className="block">
                {users.map((user, index) =>
                    (<User
                        key = {index}
                        item = {user}
                        click = {click}
                        info = {info}/>))
                }
            </div>
        </div>
    );
};

export default Users;