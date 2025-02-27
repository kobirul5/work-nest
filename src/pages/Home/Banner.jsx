import bannerImage from "../../assets/images/B.jpg"
import {Link} from "react-router-dom"
const Banner = () => {
    return (
        <div 
            className="hero relative  h-[550px] "
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#024646e8] via-[#024646c2] to-[#014e4e1c]"></div>
                <div className="hero-content container justify-start   items-start text-white">
                    <div className="mt-32">
                        <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold lg:w-10/12">Join 500+ Satisfied Employees and HR Professionals</h1>
                        <p className="mb-5">A trusted platform for employee management and HR operations.</p>
                        <Link to="/blog" className="btn bg-transparent border-white hover:bg-#014E4E text-white hover:text-primary-color">Learn More</Link>
                    </div>
                
            </div>
        </div>
    );
};

export default Banner;