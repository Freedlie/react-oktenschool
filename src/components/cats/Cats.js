import React from 'react';

const Cats = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm()
    return (
        <div>
            <p>Add cat:</p>
            <form onSubmit={}>
                <input type="text" placeholder='addcat'/>
                <button></button>
            </form>
        </div>
    );
};

export {Cats}