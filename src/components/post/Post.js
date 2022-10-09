import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            {post.title}
            <br/>
            {post.body}
            <br/><br/><br/>
        </div>
    );
};

export {Post};