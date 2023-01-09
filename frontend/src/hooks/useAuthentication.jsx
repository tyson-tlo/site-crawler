import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import useNavigationRoutes from "./navigation/useNavigationRoutes";

function useAuthentication() {
    const { navigateHome } = useNavigationRoutes();
    const [data, setData] = useState({ email: "", password: "" });

    const setValue = (name) => {
        return ({target: { value }}) => {
            setData({ ...data, [name]: value });
        }
    }

    const login = () => {
        axios.defaults.withCredentials = true
        axios.post(`${process.env.REACT_APP_API_ENDPOINT}/auth/login`, { ...data })
            .then(({ data: { token, message } }) => {
                localStorage.setItem("token", token);
                toast.success(message);
                navigateHome();
                setData({ email: "", password: "" })
            })
            .catch(({ response: { data: { message }}}) => {
                toast.error(message)
            })
    }

    return {
        login,
        setValue,
        data
    }
}

export default useAuthentication;