import React from 'react';
import {useForm} from "react-hook-form";
import {UserValidator} from "../validators";
import {joiResolver} from "@hookform/resolvers/joi";
import {UserService} from "../services";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(UserValidator),
        mode: 'all'
    });


    const submit = async (user) =>{
        const {data} = await UserService.create(user);
        setUsers(users => [...users, data])
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}
                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
                <button disabled={!isValid}>submit</button>
            </form>
        </div>
    );
};

export default UserForm;