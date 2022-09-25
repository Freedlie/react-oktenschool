import React from 'react';

const UserPosts = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default UserPosts;