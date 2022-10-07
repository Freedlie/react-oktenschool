import {axiosService} from "./axios.service";
import {urls} from "../urls";

const PostsService = {
    getAll: ()=> axiosService.get(urls.posts)
}

export {PostsService}