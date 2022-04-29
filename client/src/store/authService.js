import axios from "axios";

const API_URL= 'user/register/'
const instance = axios.create({
    baseURL: 'https://localhost:5000/',
  });

const resgister = async (userData) =>{
    const response = await fetch("https://127.0.0.1:5000/api/user/register/", userData)
    console(response)
    
    // const response = await instance.post(API_URL, userData)
    console.log(response.data)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService ={
    resgister,
}

export default authService