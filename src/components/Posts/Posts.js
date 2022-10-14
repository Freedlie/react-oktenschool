import React from 'react';
import {useSelector} from "react-redux";
import {Post} from "../Post/Post";

const Posts = () => {

    const {usersPosts} = useSelector(state => state.userReducer)

    return (
        <div>
            {
                usersPosts.map((post,index)=>(<Post key={index} post={post}/>))
            }
        </div>
    );
};

export {Posts};