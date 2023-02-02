import axios from "axios";

export const clientUrl = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
)