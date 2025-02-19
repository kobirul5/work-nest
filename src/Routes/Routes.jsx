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
import EmployDetails from "../pages/Dashboard/HR/EmployDetails";
import ProgressEmploy from "../pages/Dashboard/HR/ProgressEmploy";
import AllEmployeeList from "../pages/Dashboard/Admin/AllEmployeeList";
import PaymentEmployee from "../pages/Dashboard/Admin/PaymentEmployee";
import PaymentHistory from "../pages/Dashboard/EmployWorkSheet/PaymentHistory";
import ContactUs from "../pages/ContactUs/ContactUs";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Message from "../pages/Dashboard/Admin/Message/Message";
import AdminPrivate from "./AdminPrivate";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blog from "../pages/Blogs/Blogs/Blog";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: "/profile",
                element: <Profile/>
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
                path: "",
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'work-sheet',
                element: <EmployWorkSheet></EmployWorkSheet>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'employee-list',
                element: <EmployList></EmployList>
            },
            {
                path: 'details/:slug',
                element: <EmployDetails></EmployDetails>
            },
            {
                path: 'progress',
                element: <ProgressEmploy></ProgressEmploy>
            },
            // admin route
            {
                path: 'all-employee-list',
                element:<AdminPrivate><AllEmployeeList></AllEmployeeList></AdminPrivate>
            },
            {
                path: 'payroll',
                element:<AdminPrivate><PaymentEmployee></PaymentEmployee></AdminPrivate>
            },
            {
                path: 'massage',
                element:<AdminPrivate><Message></Message></AdminPrivate>
            }
        ]
    }
]);