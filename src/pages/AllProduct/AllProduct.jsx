import { useContext } from "react";
import { 
  FaUsers, 
  FaClock, 
  FaChartLine, 
  FaCrown, 
  FaQuoteLeft, 
  FaQuestionCircle, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin 
} from 'react-icons/fa';
import { ThemeContext } from "../../providers/ThemeProvider";


const AllProduct = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
      {/* Hero Section */}
      <header className={`${theme === 'light' ? 'bg-primary-color' : 'bg-gray-800'} text-white py-20 px-4`}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <FaUsers className="inline-block mr-4" />
            Affordable HR Solutions for SMEs
          </h1>
          <p className="text-xl mb-8">Manage attendance, payroll, and employee data in one platform</p>
          <button className={`${theme === 'light' ? 'bg-primary-color' : 'bg-gray-700'} hover:opacity-90 text-white px-8 py-3 rounded-lg text-lg transition-all`}>
            Start Free Demo
          </button>
        </div>
      </header>

      {/* Pricing Cards Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} p-6 rounded-xl shadow-lg`}>
            <FaClock className={`${theme === 'light' ? 'text-primary-color' : 'text-white'} text-4xl mb-4`} />
            <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-2xl font-bold mb-4`}>Basic Plan</h3>
            <div className={`${theme === 'light' ? 'text-green-600' : 'text-green-400'} text-3xl font-bold mb-6`}>
              $19<span className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} text-sm`}>/month</span>
            </div>
            <ul className={`space-y-3 mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              <li>✓ Up to 10 employees</li>
              <li>✓ Attendance tracking</li>
              <li>✓ Basic reporting</li>
            </ul>
            <button className={`w-full ${
              theme === 'light' 
                ? 'bg-primary-color/10 text-primary-color hover:bg-primary-color/20' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            } py-2 rounded-lg transition-all`}>
              Choose Plan
            </button>
          </div>

          {/* Standard Plan */}
          <div className={`${theme === 'light' ? 'bg-white border-primary-color' : 'bg-gray-800 border-gray-600'} p-6 rounded-xl shadow-lg border-2 transform scale-105`}>
            <FaChartLine className={`${theme === 'light' ? 'text-primary-color' : 'text-white'} text-4xl mb-4`} />
            <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-2xl font-bold mb-4`}>Standard Plan</h3>
            <div className={`${theme === 'light' ? 'text-green-600' : 'text-green-400'} text-3xl font-bold mb-6`}>
              $49<span className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} text-sm`}>/month</span>
            </div>
            <ul className={`space-y-3 mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              <li>✓ Up to 50 employees</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Mobile app access</li>
            </ul>
            <button className={`w-full ${
              theme === 'light' 
                ? 'bg-primary-color text-white hover:bg-primary-color/90' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            } py-2 rounded-lg transition-all`}>
              Most Popular
            </button>
          </div>

          {/* Premium Plan */}
          <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} p-6 rounded-xl shadow-lg`}>
            <FaCrown className={`${theme === 'light' ? 'text-primary-color' : 'text-white'} text-4xl mb-4`} />
            <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-2xl font-bold mb-4`}>Premium Plan</h3>
            <div className={`${theme === 'light' ? 'text-green-600' : 'text-green-400'} text-3xl font-bold mb-6`}>
              $99<span className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} text-sm`}>/month</span>
            </div>
            <ul className={`space-y-3 mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              <li>✓ Unlimited employees</li>
              <li>✓ Custom workflows</li>
              <li>✓ 24/7 priority support</li>
            </ul>
            <button className={`w-full ${
              theme === 'light' 
                ? 'bg-primary-color/10 text-primary-color hover:bg-primary-color/20' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            } py-2 rounded-lg transition-all`}>
              Enterprise Solution
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${theme === 'light' ? 'bg-indigo-50' : 'bg-gray-800'} py-16 px-4`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Customer Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className={`${theme === 'light' ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg`}>
                <FaQuoteLeft className={`${theme === 'light' ? 'text-primary-color' : 'text-white'} text-2xl mb-4`} />
                <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  This software saved us 20+ hours per month!
                </p>
                <div className="flex items-center">
                  <div className={`${theme === 'light' ? 'bg-primary-color' : 'bg-gray-600'} text-white w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                    AB
                  </div>
                  <div>
                    <h4 className={`font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>John Smith</h4>
                    <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Owner, Tech Solutions Ltd</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} max-w-3xl mx-auto p-6 rounded-lg shadow-lg`}>
          <h2 className={`text-3xl font-bold text-center mb-8 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            <FaQuestionCircle className={`inline-block mr-2 ${theme === 'light' ? 'text-primary-color' : 'text-white'}`} />
            FAQs
          </h2>
          <div className="space-y-6">
            {[
              { q: "How to get a demo?", a: "Click the signup button for a 7-day free trial" },
              { q: "Data security?", a: "We use SSL encryption and GDPR compliance" },
            ].map((faq, index) => (
              <div key={index} className={`border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'} pb-4`}>
                <h3 className={`font-bold text-lg ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{faq.q}</h3>
                <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AllProduct;