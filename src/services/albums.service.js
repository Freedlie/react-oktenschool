import {AxiosService} from "./axios.service";
import {urls} from "../configs";

const AlbumsService = {
    getAll :() => AxiosService.get(urls.albums)
}

export {AlbumsService};