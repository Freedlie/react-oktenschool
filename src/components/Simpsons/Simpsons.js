import '../Simpson/Simpson.css';
import Simpson from "../Simpson/Simpson";
import {data} from '../../data';

export default function Simpsons() {
    return (
        <div>
            <h2 className="h2">Simpsons family</h2>
            {
                data.map((simpson, index) => <Simpson item = {simpson} key = {index}/> )
            }
        </div>
    )
}