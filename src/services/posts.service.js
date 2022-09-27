import {AxiosService} from "./axios.service";
import {urls} from "../configs";

const PostsService ={
    getAll:(id)=>AxiosService.get(`${urls.posts}/${id}`)
}

export {PostsService};