export default function Simpson(props){
let {item} = props;
    return (
        <div className="item">
            <h2>{item.name} {item.surname} - {item.age}</h2>
            <p>{item.info}</p>
            <img src={item.photo} alt=""/>

        </div>
    )
}