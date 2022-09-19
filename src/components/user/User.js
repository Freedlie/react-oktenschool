import React from 'react';

const User = (props) => {
    let {user, click, id} = props;
    return (
        <div>
            <p>{user.id} - {user.name} {user.surname}</p>
            <button onClick={
                click(id)
            }>click me</button>
        </div>
    );
};

export default User;

