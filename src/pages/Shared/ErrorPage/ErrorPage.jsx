import { Link } from "react-router-dom";
import Navbar from "../Navbar.jsx/Navbar";
import Lottie from "lottie-react";
import errorImage from "../../../../public/404.json"

const ErrorPage = () => {
    return (<>
        <Navbar></Navbar>
        <div className="container mx-auto py-20">
            <Link to="/" className="btn text-white mx-10 md:mx-40 bg-primary-color hover:border-primary-color border-primary-color mt-10">Back To Home</Link>

            <div className="max-w-[400px] mx-auto">
                <Lottie className="" animationData={errorImage}></Lottie>
            </div>
            <p className="text-7xl text-center text-primary-color font-bold">Page Not found</p>
        </div>
    </>
    );
};

export default ErrorPage;