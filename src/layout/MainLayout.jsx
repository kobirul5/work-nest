import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar.jsx/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div className="roboto">
            <section className="">
                <Navbar></Navbar>

            </section>
            <section  className="min-h-[calc(100vh-220px)]">
                <Outlet></Outlet>
            </section>
            <section className="bg-[#1f1e1e]">

            <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;