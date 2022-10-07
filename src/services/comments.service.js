import {axiosService} from "./axios.service";
import {urls} from "../urls";

const CommentsService ={
    getAll: ()=> axiosService.get(urls.comments)
}

export {CommentsService};