import React from 'react';

const Todo = ({todo}) => {
    return (
        <div>
            <p>{todo.id}--{todo.title}</p>
        </div>
    );
};

export default Todo;