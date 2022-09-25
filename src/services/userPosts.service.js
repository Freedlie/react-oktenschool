import {axiosService} from "./axios.service";
import {urls} from "../confings";


const UserPostsService = {
    getAll:(id)=>axiosService.get(`${urls.users}/${id}${urls.posts}`),
    create:(id, post)=>axiosService.post(`${urls.users}/${id}${urls.posts}`, post)
}

export {UserPostsService}