import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers : {'Content-Type': 'application/json'},
})

const getUsers = () =>{
    return axiosInstance.get('/users')
}

let axiosInstance1 = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches',
    headers : {'Content-Type': 'application/json'},
})

const getSpaceItems = () =>{
    return axiosInstance1.get('/')
}

export {getUsers,getSpaceItems}