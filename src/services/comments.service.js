import {AxiosService} from "./axios.service";
import {urls} from "../configs";

const CommentsService = {
    getAll :() => AxiosService.get(urls.comments)
}

export {CommentsService};