import {AxiosService} from "./axios.service";
import {urls} from "../configs";

const UserService = {
    getAll: ()=> AxiosService.get(urls.users)
}

export {
    UserService
}