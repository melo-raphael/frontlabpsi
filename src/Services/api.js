import axios from "axios";

const api = axios.create({
    baseURL: "http://ec2-18-228-245-140.sa-east-1.compute.amazonaws.com"
});

export default api;