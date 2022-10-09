import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            {comment.name}
            <br/>
            {comment.body}
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export {Comment};