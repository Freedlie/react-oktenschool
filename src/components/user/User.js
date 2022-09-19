import React from 'react';

const User = (props) => {
    let {user} = props;
    return (
        <div>
            <p>{user.id} - {user.name} {user.surname}</p>
        </div>
    );
};

export default User;

