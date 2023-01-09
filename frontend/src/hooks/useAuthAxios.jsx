import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuthAxios() {    
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT

    useEffect(() => {
        if (!token) {
            return navigate("/login");
        }

        axios.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            if (error && error.response) {
                if (error.response.status && [401].includes(error.response.status)) {
                    navigate("/login");
                }
                
                return Promise.reject(error);
            }
        });

        axios.defaults.headers["Authorization"] = "Bearer " + token;
        axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
    }, [])   

    return axios;
}