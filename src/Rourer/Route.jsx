import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CourseDetail from "../Pages/CourseDetail/CourseDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/coursedetail',
                element: <CourseDetail></CourseDetail>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])