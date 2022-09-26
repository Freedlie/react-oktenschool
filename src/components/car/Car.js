import React from 'react';

const Car = ({car,updateCar,deleteCar,getItem}) => {
    let num = 0;
    return (
        <div>
            <p>model:{car.model}</p>
            <p>price:{car.price}</p>
            <p>year:{car.year}</p>
            <button onClick={()=>{
                updateCar(car);
                num++;
                getItem(num);
            }}>update</button>
            <button onClick={()=>{
                deleteCar(car.id)
            }}>delete</button>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Car;