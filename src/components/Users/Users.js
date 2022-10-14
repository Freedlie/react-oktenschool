import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {UserService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users,loading,error} = useSelector(state => state.userReducer);

    useEffect(()=>{
        // UserService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll());
    },[])

    return (
        <div>
            {
                loading&& <h3>Loading...</h3>
            }
            {
                error&& JSON.stringify(error)
            }
            {
                users.map((user,index)=>(<User key={index} user={user}/>))
            }

        </div>
    );
};

export {Users};