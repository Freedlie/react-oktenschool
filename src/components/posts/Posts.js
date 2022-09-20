import React, {useEffect, useState} from 'react';

import {getPosts} from "../../services/api.info.axios";
import Post from "../post/Post";

const Posts = (props) => {
    let {postsId} = props;

    let [posts, setPosts] = useState([]);

    useEffect(() =>{
        getPosts(postsId)
            .then(value => {
                setPosts(value.data);
            })
    }, [postsId])

    return (
        <div>
            {posts.map((post, index) =>(
                <Post
                    key = {index}
                    post = {post}/>
            ))}
        </div>
    );
};

export default Posts;