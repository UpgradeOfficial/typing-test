import axios  from "axios";

const baseURL =  'http://127.0.0.1:5000/';

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000, 
    headers: {
        Authorization : localStorage.getItem("access_token")
        ? "JWT " + localStorage.getItem('access_token') 
        : null,
        "Content-Type": "application/json", 
        accept: "application/json", 
    }
})

export const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts" 
});

export default axiosInstance;
