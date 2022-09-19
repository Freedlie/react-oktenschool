import React, {useEffect, useState} from 'react';

import {getPosts} from "../../services/api.info.axios";

const User = (props) => {
    let {user, click} = props;

    let [posts, setPosts] = useState([]);

    useEffect(() =>{
        getPosts(user.id)
            .then(value => {
                setPosts(value.data);
            })
    }, [user.id])

    return (
        <div>
            <p>{user.id} - {user.name} {user.surname}</p>
            <button onClick={
                click(posts)
            }>click me</button>
        </div>
    );
};

export default User;

