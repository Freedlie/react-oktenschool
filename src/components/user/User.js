import React from 'react';

const User = (props) => {
    let {item, click} = props;
    return (
        <div className= "user">
            <h3>{item.id} - {item.name}</h3>
            <button onClick={() => {
                click(item);
            }
            }>choose me</button>
        </div>
    );
};

export default User;