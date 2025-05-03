import { ThemeContext } from "../../../providers/ThemeProvider";
import { Link } from 'react-scroll';
import heroImage from "../../../assets/images/office.jpg"
import { useContext } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';


const HeroContactU = () => {
    const { theme } = useContext(ThemeContext);


    return (
        <header
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
            className="relative overflow-hidden bg-cover bg-center text-white py-24 px-4"
        >
            <div className="absolute inset-0 bg-primary-color opacity-70"></div>
            <div className="max-w-6xl mx-auto text-center relative">
                <div className="inline-block p-6 rounded-full bg-white/10 mb-8">
                    <FaEnvelope className="text-5xl animate-bounce" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    We'd Love to Hear From You
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Whether you have a question, suggestion, or feedback, our team is ready to help.
                </p>
                <Link
                    to="contact-form"
                    smooth={true}
                    duration={500}
                    className={`btn flex items-center justify-center gap-2 rounded-xl text-lg font-semibold transition-all
                        ${theme === "light"
                            ? "bg-white text-primary-color hover:bg-opacity-95 shadow-lg hover:shadow-xl"
                            : "bg-[#1f1f1f] text-white hover:bg-[#333]"}
                    `}
                >
                    <span>Contact Us Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <div className="mt-8 text-sm opacity-80">
                    Our team typically responds within 24 hours.
                </div>
            </div>
        </header>
    );
};

export default HeroContactU;