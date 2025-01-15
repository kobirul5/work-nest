import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import EmployWorkSheet from "../pages/Dashboard/EmployWorkSheet/EmployWorkSheet";
import PrivateRoute from "./PrivateRoute";
import EmployList from "../pages/Dashboard/HR/EmployList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path:"dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'work-sheet',
                element: <EmployWorkSheet></EmployWorkSheet>
            },
            {
                path: 'employee-list',
                element: <EmployList></EmployList>
            }
        ]
    }
]);