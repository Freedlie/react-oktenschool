import {urls} from "../configs";
import {AxiosService} from "./axios.service";


const PostService = {
    getAll: () => AxiosService.get(urls.posts),
    getById:(id)=> AxiosService.get(`${urls.users}/${id}${urls.posts}`)
}

export{
    PostService
}