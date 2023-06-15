import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CourseDetail from "../Pages/CourseDetail/CourseDetail";
import InsDetail from "../Pages/InsDetail/InsDetail";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import StudentHome from "../Pages/Dashboard/Student/StudentHome";
import Favorite from "../Pages/Dashboard/Student/Favorite";
import Payment from "../Pages/Dashboard/Student/Payment";
import Enroll from "../Pages/Dashboard/Student/Enroll";

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
                path: '/insdetail',
                element: <PrivateRoute><InsDetail></InsDetail></PrivateRoute>
            },
            {
                path: '/coursedetail',
                element: <PrivateRoute><CourseDetail></CourseDetail></PrivateRoute>
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
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children: [
            {
                path: 'studentprofile',
                element: <StudentHome></StudentHome>
            },
            {
                path: 'favorite',
                element: <Favorite></Favorite>
            },
            {
                path: 'favorite/payment',
                element: <Payment></Payment>
            },
            {
                path: 'enroll',
                element: <Enroll></Enroll>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])