import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers : {'Content-Type': 'application/json'},
})

const getUsers = () =>{
    return axiosInstance.get('/users')
}

const getPosts = (id) =>{
    return axiosInstance.get(`/users/${id}/posts`)
}

export {getUsers,getPosts}
