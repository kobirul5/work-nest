import { useContext } from "react";
import { 
  FaUsers, 
  FaClock, 
  FaChartLine, 
  FaCrown, 
  FaQuoteLeft, 
  FaQuestionCircle, 
  FaCheckCircle,
  FaRegSmile
} from 'react-icons/fa';
import { ThemeContext } from "../../providers/ThemeProvider";
import HeroAllProduct from "./Components/HeroAllProduct";
import Features from "./Components/Features";

const AllProduct = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
      
      {/* Hero Section */}
      <HeroAllProduct/>

      {/* Features Section */}
      <Features/>
      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Simple, Transparent Pricing
            </h2>
            <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Scale with your business. No hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: "Starter", price: 29, features: ["Up to 50 employees", "Basic HR features", "Email support", "3 team members"], popular: false},
              {title: "Professional", price: 99, features: ["Up to 200 employees", "Advanced analytics", "Priority support", "10 team members"], popular: true},
              {title: "Enterprise", price: 299, features: ["Unlimited employees", "Custom workflows", "24/7 support", "Unlimited team"], popular: false},
            ].map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 transition-all hover:transform hover:-translate-y-2 
                ${theme === 'light' 
                  ? 'bg-white border border-gray-100 hover:shadow-xl' 
                  : 'bg-gray-800 border-gray-700'}
                ${plan.popular ? 'ring-2 ring-primary-color' : ''}
              `}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-color text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {plan.title}
                </h3>
                <div className="mb-8">
                  <span className={`text-5xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>/month</span>
                </div>
                <ul className={`space-y-4 mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors
                  ${plan.popular 
                    ? 'bg-primary-color text-white hover:bg-primary-color/90' 
                    : theme === 'light' 
                      ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'}
                `}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Trusted by Leading Teams
            </h2>
            <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Join 2,000+ companies growing with us
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className={`p-8 rounded-2xl ${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center 
                    ${theme === 'light' ? 'bg-primary-color/10' : 'bg-gray-700'}`}>
                    <FaQuoteLeft className={`text-xl ${theme === 'light' ? 'text-primary-color' : 'text-white'}`} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Sarah Johnson</h4>
                    <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>HR Director @TechCorp</p>
                  </div>
                </div>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} mb-6`}>
                  "Since implementing this system, our HR operations have become 50% more efficient. The analytics dashboard is particularly impressive."
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaRegSmile key={star} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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