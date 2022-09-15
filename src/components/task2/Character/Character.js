import './Character.css';
export default function Character(props){
    let {item} = props;
    return(<div>
        <h2> {item.id} {item.name}</h2>
        <p>info: {item.status} {item.species} {item.gender}</p>
        <img src={item.image} alt="img"/>
    </div>)
}