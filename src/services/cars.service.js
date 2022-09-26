import {AxiosService} from "./axios.service.api";
import {urls} from "../configs";

const CarsService = {
    getAll : ()=> AxiosService.get(urls.cars),
    create:(car)=>AxiosService.post(urls.cars, car),
    getById:(id)=>AxiosService.get(`${urls.cars}/${id}`),
    updateById:(id, car)=>AxiosService.put(`${urls.cars}/${id}`, car),
    deleteById:(id)=>AxiosService.delete(`${urls.cars}/${id}`),
}

export {CarsService};