import React from 'react';

const Post = (props) => {
    let {post} = props;
    return (
        <div>
            <h3 className='title'>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;