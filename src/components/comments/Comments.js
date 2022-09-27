import React, {useEffect, useState} from 'react';
import {CommentsService} from "../../services";
import Comment from "../comment/Comment";

const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(()=>{
        CommentsService.getAll().then(({data})=>setComments(data));
    },[])

    return (
        <div>
            {
                comments.map((comment,index)=>(<Comment key={index} comment={comment}/>))
            }
        </div>
    );
};

export default Comments;