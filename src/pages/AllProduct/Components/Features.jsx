
import {
    FaUsers,
    FaClock,
    FaChartLine,
    FaCheckCircle,
    FaRegSmile,
    FaCrown,
} from 'react-icons/fa';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { useContext } from 'react';
import Heading from '../../Shared/Heading/Heading';


const Features = () => {
    const { theme } = useContext(ThemeContext);
    const features = [
        { icon: FaClock, title: "Time Tracking", desc: "Automated attendance and shift management" },
        { icon: FaChartLine, title: "Analytics", desc: "Real-time workforce insights and reports" },
        { icon: FaCrown, title: "Payroll", desc: "Error-free payroll processing in minutes" },
        { icon: FaUsers, title: "Employee Portal", desc: "24/7 self-service access for employees" },
        { icon: FaCheckCircle, title: "Compliance", desc: "Stay updated with labor regulations" },
        { icon: FaRegSmile, title: "Engagement", desc: "Employee satisfaction tracking" },
    ]
    return (
        <section className="pt-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <Heading
                    title="Everything You Need in One Platform"
                    subtile="Designed for efficiency and simplicity"
                    />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map(({ icon: Icon, title, desc }, index) => (
                        <div key={index} className={`p-8 rounded-2xl transition-all hover:transform hover:-translate-y-2 
                ${theme === 'light'
                                ? 'bg-white hover:shadow-xl border border-gray-100'
                                : 'bg-[#1f1f1f] hover:border-gray-600 border border-gray-700'}
              `}>
                            <Icon className={`text-4xl mb-6 ${theme === 'light' ? 'text-primary-color' : 'text-white'}`} />
                            <h3 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{title}</h3>
                            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Features