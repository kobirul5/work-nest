import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="flex flex-col text-white py-20 text-center justify-center">
               <div className="flex justify-center items-center">
                <img src={logo} alt=""  className="w-20"/>
               <h3 className="uppercase text-4xl font-bold">Work Nest</h3>
               </div>
               <p className="px-5 md:w-8/12 mx-auto mb-5">Welcome to Work Nest, a comprehensive platform designed to streamline employee management. Our solution enables employees to update their workflows, while HR executives can efficiently monitor progress, manage salaries, contracts, and more—all in one place. Simplifying workforce management for modern businesses</p>
            <nav className="flex items-center text-cyan-700 justify-center text-center gap-5">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/contact-us">Contact Us</Link>
            </nav>
            <nav className="flex items-center text-3xl mt-5 justify-center text-center gap-5">
                <Link to="/"><FaFacebook></FaFacebook></Link>
                <Link to="/"><FaYoutube/></Link>
                <Link to="/"><FaInstagram/></Link>
                
            </nav>
        </footer>
    );
};

export default Footer;