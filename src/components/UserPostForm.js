import React from 'react';
import {UserPostsService} from "../services";
import {useForm} from "react-hook-form";

const UserPostForm = ({setUserPosts,postId}) => {
    const {register, handleSubmit, reset, formState: {isValid}} = useForm({mode: 'all'})

    const submitPost = async (post)=>{
        const {data} = await UserPostsService.create(postId, post);
        setUserPosts(posts => [...posts, data]);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitPost)}>
                <input type="text" placeholder={'title'} {...register('title')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button disabled={!isValid}>submit post</button>
            </form>
        </div>
    );
};

export default UserPostForm;