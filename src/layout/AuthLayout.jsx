import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar.jsx/Navbar";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
    return (
        <div className="">
            <Toaster></Toaster>
            <Navbar></Navbar>
            <section className="py-20">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AuthLayout;