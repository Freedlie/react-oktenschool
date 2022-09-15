import {useState} from "react";
import Character from "../Character/Character";

export default function Characters(){
    let [characters, setCharacter] = useState([]);
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacter(value.results);
        });
    return (<div>
        {characters.map(character =>
            (<Character item = {character}/>)
        )}
    </div>);
}

