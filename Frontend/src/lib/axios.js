import axios from "axios";

export const HOST_URL = "http://localhost:5001"
export const API_URL = `${HOST_URL}/api`

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? API_URL : "/api",
    withCredentials: true,
})