import axios from "axios";
import {baseURL} from "../confings";

let axiosService = axios.create({baseURL});

export {axiosService}