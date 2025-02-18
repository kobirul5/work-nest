import { memo } from "react";
import { motion } from "framer-motion";
import { FaLock, FaUserShield, FaKey, FaShieldAlt, FaDatabase, FaUserCheck } from "react-icons/fa";

const securityFeatures = [
  {
    icon: <FaLock className="text-6xl text-[#014E4E]" />,
    title: "End-to-End Encryption",
    description: "All data is encrypted using AES-256 to prevent unauthorized access.",
    image: "https://i.ibb.co/b55X0GG6/image6.jpg",
  },
  {
    icon: <FaUserShield className="text-6xl text-[#014E4E]" />,
    title: "Role-Based Access Control",
    description: "Ensures only authorized personnel can access sensitive information.",
    image: "https://i.ibb.co/LzMW06Qr/image.jpg",
  },
  {
    icon: <FaKey className="text-6xl text-[#014E4E]" />,
    title: "JWT Authentication",
    description: "Secure authentication using JSON Web Tokens (JWT) to protect user sessions.",
    image: "https://i.ibb.co/rGDRNwB7/image-5.jpg",
  },
  {
    icon: <FaShieldAlt className="text-6xl text-[#014E4E]" />,
    title: "Multi-Factor Authentication",
    description: "Enhances security with an extra layer of authentication for users.",
    image: "https://i.ibb.co/60rH0QcF/image-4.jpg",
  },
  {
    icon: <FaDatabase className="text-6xl text-[#014E4E]" />,
    title: "Secure Data Storage",
    description: "All employee data is stored securely with automated backups.",
    image: "https://i.ibb.co/ynydzTbt/image-3.jpg",
  },
  {
    icon: <FaUserCheck className="text-6xl text-[#014E4E]" />,
    title: "Regulatory Compliance",
    description: "Meets GDPR, HIPAA, and industry security standards to ensure compliance.",
    image: "https://i.ibb.co/tp2QTRc7/image-2.jpg",
  },
];

const SecuritySection = () => {
  return (
    <section
      className="hero bg-fixed mb-20"
      style={{ backgroundImage: "url(https://i.ibb.co/b55X0GG6/com.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="text-white mb-14 py-16">
          <h2 className="text-center text-4xl font-bold text-[#00A8A8] mb-12">
            Security & Compliance
          </h2>
          <div>
            {securityFeatures.map((feature, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col mt-5 px-5 md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full md:w-1/2 h-[200px] object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                      {feature.icon}
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SecuritySection);
