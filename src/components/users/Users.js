import React, {useEffect, useState} from 'react';

import {getUsers, getPosts} from "../../services/api.info.axios";
import User from "../user/User";
import Posts from "../posts/Posts";

const Users = () => {
    let [users, setUsers] = useState([]);
    let [postId, setPostId] = useState(null);
    let [posts, setPosts] = useState([]);

    let click = (id)=>{
        setPostId(id);
    }

    useEffect(()=>{
        getUsers()
            .then(value => {
                setUsers(value.data);
            })
    },[])

    useEffect(() =>{
        getPosts(postId)
            .then(value => {
                setPosts(value.data);
            })
    }, [postId])


    return (
        <div>
            <div>
                {users.map((user, index) => (
                    <User
                     key = {index}
                     user = {user}
                     click = {click}
                     id = {user.id}/>
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