const User = (props) => {
    let {user, getPostsById} = props;

    return (
        <div>
            <p>{user.id} - {user.name} {user.surname}</p>
            <button onClick={() =>
                getPostsById(user.id)
            }>click me</button>
        </div>
    );
};

export default User;

