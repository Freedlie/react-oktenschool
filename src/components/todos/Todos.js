import React, {useEffect, useState} from 'react';

import {TodosService} from "../../services";
import Todo from "../todo/Todo";

const Todos = () => {

    let [todos, SetTodos] = useState([]);

    useEffect(()=>{
        TodosService.getAll().then(({data})=>SetTodos(data));
    },[])

    return (
        <div>
            {
                todos.map((todo,index)=>(<Todo key={index} todo={todo}/>))
            }
        </div>
    );
};

export default Todos;