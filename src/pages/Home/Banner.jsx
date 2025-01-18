import bannerImage from "../../assets/images/B.jpg"
const Banner = () => {
    return (
        <div
            className="p-0 h-[550px] "
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className=" hero justify-start h-full bg-gradient-to-r from-[#024646e8] to-[#014e4e1c]">
                <div className="hero-content justify-start  items-start ml-2 text-white">
                    <div className=" max-w-3xl">
                        <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">Join 500+ Satisfied Employees and HR Professionals</h1>
                        <p className="mb-5">A trusted platform for employee management and HR operations.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;