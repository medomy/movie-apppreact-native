import axios from "axios";
import { networkConfig } from "./config";

const networkInstance = axios.create({
    baseURL: networkConfig.baseUrl,
    params: {
        api_key: networkConfig.API_KEY
    }
})

export default networkInstance;