import { useContext } from "react";
import { 
  FaCheckCircle,
} from 'react-icons/fa';
import { ThemeContext } from "../../../providers/ThemeProvider";
import Heading from "../../Shared/Heading/Heading";
import { Link, Element } from 'react-scroll';


const Pricing = () => {

    const { theme } = useContext(ThemeContext);
    const services = [
        { title: "Starter", price: 29, features: ["Up to 200 employees", "Basic HR features", "Email support", "3 team members"], popular: false },
        { title: "Professional", price: 99, features: ["Up to 500 employees", "Advanced analytics", "Priority support", "10 team members"], popular: true },
        { title: "Enterprise", price: 299, features: ["Unlimited employees", "Custom workflows", "24/7 support", "Unlimited team"], popular: false },
    ]

    return (
        <Element name="price" className=" px-4 pt-20  dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <Heading
                    subtile={"Scale with your business. No hidden fees."}
                    title="Simple, Transparent Pricing"
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((plan, index) => (
                        <div key={index} className={`relative rounded-2xl p-8 transition-all hover:transform hover:-translate-y-2 
                    ${theme === 'light'
                                ? 'bg-white border border-gray-100 hover:shadow-xl'
                                : 'bg-[#1f1f1f] border-gray-700'}
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
                                        ? 'bg-primary-color/30 text-black hover:bg-primary-color/50'
                                        : 'bg-primary-color/30 text-white hover:bg-primary-color/50'}
                    `}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Element>

    )
}

export default Pricing;