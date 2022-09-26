import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
// import {joiResolver} from "@hookform/resolvers/joi";

import {CarsService} from "../../services";
// import {CarValidator} from "../../validators/Car.validator";

const CarForm = ({setCars,uCar,item,updateCarById}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        // resolver: joiResolver(CarValidator)
    })

    const submitCar = async (objCar) =>{
        const {data} = await CarsService.create(objCar);
        setCars(cars => [...cars, data]);
        reset();
    }

    let {model, year, price} = uCar;

    useEffect(()=>{
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    })


    return (
        <div>
            <form onSubmit={handleSubmit(submitCar)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                {errors.model && <span>{errors.model.message}</span>}
                <input type="text" placeholder={'price'} {...register('price',{valueAsNumber: true})}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="text" placeholder={'year'} {...register('year',{valueAsNumber: true})}/>
                {errors.year && <span>{errors.year.message}</span>}

                {(item % 2 === 0)?<button>submit</button>:
                    <button onClick={() =>{
                        updateCarById(uCar.id,uCar);
                    }}>update</button>}

            </form>
        </div>
    );
};

export default CarForm;

