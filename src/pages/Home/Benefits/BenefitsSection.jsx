import { motion } from "framer-motion";
import { FaClock, FaChartLine, FaShieldAlt, FaUserCheck, FaDatabase, FaTasks } from "react-icons/fa";

const benefits = [
  {
    icon: <FaClock className="text-4xl text-[#014E4E]" />,
    title: "Saves Time",
    description: "Automates employee tracking, payroll, and HR processes, reducing manual workload.",
  },
  {
    icon: <FaChartLine className="text-4xl text-[#014E4E]" />,
    title: "Increases Productivity",
    description: "Streamlines workflow with real-time data insights and automated reports.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-[#014E4E]" />,
    title: "Enhanced Security",
    description: "Uses JWT authentication and role-based access to protect sensitive data.",
  },
  {
    icon: <FaUserCheck className="text-4xl text-[#014E4E]" />,
    title: "Improves HR Efficiency",
    description: "Simplifies employee onboarding, attendance tracking, and workload management.",
  },
  {
    icon: <FaDatabase className="text-4xl text-[#014E4E]" />,
    title: "Reduces Errors",
    description: "Minimizes manual errors in payroll calculations, attendance, and compliance tracking.",
  },
  {
    icon: <FaTasks className="text-4xl text-[#014E4E]" />,
    title: "Better Task Management",
    description: "Assign, track, and manage tasks efficiently with role-based access.",
  },
];

const BenefitsSection = () => {
  return (
    <div className="container mx-auto px-6 mb-20">
      <h2 className="mb-8  text-3xl md:text-5xl font-bold text-center">
        Why Choose Our Employee Management System?
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-white border border-[#014E4E] rounded-xl shadow-md flex flex-col items-center text-center"
          >
            {benefit.icon}
            <h3 className="text-xl font-semibold text-[#014E4E] mt-4">{benefit.title}</h3>
            <p className="text-gray-700 mt-2">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BenefitsSection;
