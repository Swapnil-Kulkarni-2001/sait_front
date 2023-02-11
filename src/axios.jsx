import axios from "axios";

const API = axios.create({
    baseURL : "https://wcesait-server.onrender.com",
})

export default API;