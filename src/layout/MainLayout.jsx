import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar.jsx/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <section >
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;