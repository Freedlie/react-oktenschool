import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/api.info.axios";
import User from "../user/User";
import Posts from "../posts/Posts";

const Users = () => {
    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState([]);

    let click = (posts)=>{
        setPosts(posts);
    }

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
                        click = {click}/>
                ))}
            </div>
            <div>
                {posts.map((post, index) =>(
                    <Posts
                        key = {index}
                        post = {post}/>
                ))}
            </div>
        </div>
    );
};

export default Users;