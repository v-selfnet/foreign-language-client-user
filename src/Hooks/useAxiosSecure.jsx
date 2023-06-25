import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(res => res, async error => {
            if (error.res && (error.response.status === 401 || error.res.status === 403)) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        });
    }, [logOut, navigate]);
    
    return [axiosSecure];
};

export default useAxiosSecure;