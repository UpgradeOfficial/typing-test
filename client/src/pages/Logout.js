import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axiosInstance from "../axios";

const Logout = () => {
    
    const navigate = useNavigate()
    useEffect(() =>{
        const response = axiosInstance.post('user/logout/blacklist', {
            refresh_token : localStorage.getItem('refresh_token')
        }).then((res)=>{
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['authorization'] = null;
            navigate('/login')
        })
        
    })

    return (
        <div>this is the logout page</div>
        )
    

    
}
 
export default Logout;