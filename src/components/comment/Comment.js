import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <p>{comment.id}--{comment.name}</p>
            <p>{comment.body}</p>
            <span><Link to={comment.postId.toString()}>Get post</Link></span>
        </div>
    );
};

export default Comment;