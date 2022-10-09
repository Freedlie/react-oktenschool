import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {ADD_POSTS} from "../../actions/actions";
import {PostsService} from "../../services/posts.service";
import {Post} from "../post/Post";

const Posts = () => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(()=>{
        PostsService.getAll().then(({data})=> dispatch({type:ADD_POSTS,payload: data}))
    },[dispatch])

    return (
        <div>
            {
                state?.posts && state.posts.map((post,index)=> (<Post key={index} post={post}/>))
            }
        </div>
    );
};


export {Posts};