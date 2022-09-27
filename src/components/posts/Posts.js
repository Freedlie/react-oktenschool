import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PostsService} from "../../services";
import Post from "../post/Post";

const Posts = () => {
    let {postId} = useParams();

    let [post, setPost] = useState(null);

    useEffect(()=>{
        PostsService.getAll(postId).then(({data})=>setPost(data));
    },[postId])

    return (
        <div>
            {post && (<Post post={post}/>)}
        </div>
    );
};

export default Posts;