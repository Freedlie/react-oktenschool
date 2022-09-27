import {AxiosService} from "./axios.service";
import {urls} from "../configs";

const TodosService = {
    getAll :() => AxiosService.get(urls.todos)
}

export {TodosService};