import React, {useEffect, useState} from 'react';
import {CarsService} from "../../services";
import Car from "../car/Car";
import CarForm from "../carForm/CarForm";


const Cars = () => {
    let [uCar, setUCar] = useState({});
    let [cars,setCars] = useState([]);
    let [carID, setCarId] = useState(null);
    let [item, setItem] = useState(null);

    useEffect(()=> {
        CarsService.getAll().then(({data}) => setCars(data));
    },[])

    const updateCar = (uCar) =>{
        setUCar(uCar);
    }

    const deleteCar = (idCar) =>{
        setCarId(idCar);
    }

    useEffect(()=>{
        CarsService.deleteById(carID).then(({data}) => setCars(data));
    },[carID])

    const getItem = (num) =>{
        setItem(num);
    }

    const updateCarById = (id, car)=>{
        CarsService.updateById(id,car).then(({data})=> setCars(data));
    }

    return (
        <div>
            <div>
                <CarForm setCars = {setCars} uCar={uCar} item={item} updateCarById={updateCarById}/>
            </div>
            <hr/>
            <div>
                {
                    cars.map((car,index)=>(<Car key = {index} car = {car} updateCar ={updateCar} deleteCar={deleteCar} getItem={getItem}/>))
                }
            </div>
        </div>
    );
};

export default Cars;