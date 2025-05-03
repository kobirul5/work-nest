import { useContext } from "react";
import { 
  FaQuoteLeft, 
  FaCheckCircle,
  FaRegSmile
} from 'react-icons/fa';
import { ThemeContext } from "../../providers/ThemeProvider";
import HeroAllProduct from "./Components/HeroAllProduct";
import Features from "./Components/Features";
import Pricing from "./Components/Priceing";
import Testimonial from "../Home/Testimonial/Testimonial";

const AllProduct = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === 'light' ? '' : ''}`}>
      
      {/* Hero Section */}
      <HeroAllProduct/>

      {/* Features Section */}
      <Features/>
      {/* Pricing Section */}
        <Pricing/>
      {/* Testimonials Section */}
      <section className="py-20 px-4">
       <Testimonial/>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-color">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies already streamlining their HR processes
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-primary-color px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AllProduct;