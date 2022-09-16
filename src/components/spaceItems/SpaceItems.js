import React, {useEffect, useState} from 'react';
import {getSpaceItems} from "../../services/api.users.axios";
import SpaceItem from "../spaceItem/SpaceItem";

const SpaceItems = () => {
    let [items, setItems] = useState([]);
    useEffect(() =>{
        getSpaceItems()
            .then(value => {
                    setItems(value.data)
                    console.log(value);
                }
                )
    },[])
    return (
        <div>
            {items.map((value,index) =>
            <SpaceItem key = {index} space = {value}/>
            )}
        </div>
    );
};

export default SpaceItems;