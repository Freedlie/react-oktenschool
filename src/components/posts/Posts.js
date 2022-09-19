import React from 'react';

const Posts = (props) => {
    let {post} = props;
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Posts;