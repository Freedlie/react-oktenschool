import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {CommentsService} from "../../services/comments.service";
import {ADD_COMMENTS} from "../../actions/actions";
import {Comment} from "../comment/comment";

const Comments = () => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(()=>{
        CommentsService.getAll().then(({data})=> dispatch({type:ADD_COMMENTS,payload: data}))
    },[dispatch])

    return (
        <div>
            {
                state?.comments && state.comments.map((comment,index)=> (<Comment key={index} comment={comment}/>))
            }
        </div>
    );
};

export {Comments};