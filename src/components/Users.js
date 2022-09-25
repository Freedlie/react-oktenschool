import React, {useEffect, useState} from 'react';
import UserForm from "./UserForm";
import {UserPostsService, UserService} from "../services";
import User from "./User";
import UserPosts from "./UserPosts";
import UserPostForm from "./UserPostForm";


const Users = () => {
    let [users,setUsers] = useState([]);
    let [userPosts,setUserPosts] = useState([]);
    let [postId, setPostId] = useState(null);

    const userId = (id) =>{
        setPostId(id);
    }

    useEffect(()=>{
        UserService.getAll().then(({data}) => setUsers(data))
    }, []);

    useEffect(()=>{
        UserPostsService.getAll(postId).then(({data}) => setUserPosts(data));
    },[postId])

    return (
        <div>
            <UserForm setUsers = {setUsers}/>
            <hr/>
            {
                users.map(
                    (user,index)=> (<User key = {index} user = {user} userId ={userId}/>)
                )
            }
            <UserPostForm setUserPosts={setUserPosts} postId={postId}/>
            {
                userPosts.map(
                    (post,index) => (<UserPosts key = {index} post = {post}/>)
                )
            }
        </div>
    );
};

export default Users;