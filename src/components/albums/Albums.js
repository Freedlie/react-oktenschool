import React, {useEffect, useState} from 'react';
import {AlbumsService} from "../../services";
import Album from "../album/Album";

const Albums = () => {

    let [albums, setAlbums] = useState([]);

    useEffect(()=>{
        AlbumsService.getAll().then(({data})=>setAlbums(data));
    },[])

    return (
        <div>
            {
                albums.map((album,index)=>(<Album key={index} album={album}/>))
            }
        </div>
    );
};

export default Albums;