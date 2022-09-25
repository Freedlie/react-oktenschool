import React from 'react';

const User = ({user,userId}) => {

    return (
        <div>
            <p>{user.id}--{user.name} ({user.username})</p>
            <button onClick={()=>userId(user.id)}>show posts</button>
        </div>
    );
};

export default User;