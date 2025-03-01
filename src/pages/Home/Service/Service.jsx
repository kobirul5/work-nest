import { useContext } from "react";
import Heading from "../../Shared/Heading/Heading";
import { ThemeContext } from "../../../providers/ThemeProvider";

const Service = () => {
    const {theme} = useContext(ThemeContext)
    const services = [
        {
            title: "Employee Workflow Tracking",
            description:
                "Monitor employees' workflow and get real-time updates to ensure productivity.",
            icon: "📊",
        },
        {
            title: "Salary Management",
            description:
                "Easily manage salary records, bonuses, and payment statuses for employees.",
            icon: "💰",
        },
        {
            title: "Contract Management",
            description:
                "Keep track of employee contracts, their duration, and important documents.",
            icon: "📑",
        },
        {
            title: "HR Tools",
            description:
                "Streamline HR operations with tools to manage profiles, time tracking, and more.",
            icon: "🛠️",
        },
    ];
    return (
        <div className="">
            <div className="container mx-auto text-center">
                <Heading
                    title={"Our Services"}
                    subtile={"Explore the various services we provide to ensure smooth management of employees and HR operations."}
                ></Heading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${theme == "light" ? "bg-gray-100":"bg-[#1f1f1f]"} card  shadow-lg   p-6 hover:shadow-xl transition`}
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-[#777777]">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;