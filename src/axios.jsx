import axios from "axios";

const API = axios.create({
    baseURL : "https://sait-server.onrender.com",
})

export default API;