import { useLocation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import Heading from '../../Shared/Heading/Heading';
import {motion} from "motion/react"
import { useState } from 'react';
const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation()
    const blogs = [
        {
            id: 1,
            title: "Top 5 Trends in HR Management for 2025",
            category: "HR Trends",
            description: "Discover the latest trends shaping the HR industry and how to stay ahead.",
            image: "https://i.ibb.co/jvgcK75n/hr.jpg",
        },
        {
            id: 2,
            title: "How to Improve Employee Engagement",
            category: "Employee Management",
            description: "Learn actionable strategies to boost employee productivity and satisfaction.",
            image: "https://i.ibb.co/vCRLxXq/employ.jpg",
        },
        {
            id: 3,
            title: "The Ultimate Guide to Salary Management",
            category: "Salary Management",
            description: "Streamline your salary processes with these expert tips.",
            image: "https://i.ibb.co/4n7T31cN/slary.jpg",
        },
        {
            id: 4,
            title: "AI in HR: How Technology is Changing Recruitment",
            category: "HR Technology",
            description: "Explore how artificial intelligence is transforming the hiring process.",
            image: "https://i.ibb.co/jvgcK75n/hr.jpg",
        },
        {
            id: 5,
            title: "10 Tips for Effective Remote Work Management",
            category: "Remote Work",
            description: "Learn how to manage remote teams efficiently and keep them productive.",
            image: "https://i.ibb.co/vCRLxXq/employ.jpg",
        },
        {
            id: 6,
            title: "Workplace Diversity & Inclusion: Best Practices",
            category: "Diversity & Inclusion",
            description: "Create an inclusive work environment with these key strategies.",
            image: "https://i.ibb.co/4n7T31cN/slary.jpg",
        },
        {
            id: 7,
            title: "How to Conduct Performance Reviews That Actually Work",
            category: "Performance Management",
            description: "Make performance evaluations meaningful and effective for employees.",
            image: "https://i.ibb.co/jvgcK75n/hr.jpg",
        },
        {
            id: 8,
            title: "Payroll Management: Common Mistakes & How to Avoid Them",
            category: "Payroll Management",
            description: "Avoid costly payroll errors with these expert insights.",
            image: "https://i.ibb.co/vCRLxXq/employ.jpg",
        },
        {
            id: 9,
            title: "Building a Strong Company Culture: Where to Start?",
            category: "Company Culture",
            description: "Understand how to foster a positive and engaging workplace culture.",
            image: "https://i.ibb.co/4n7T31cN/slary.jpg",
        },
        {
            id: 10,
            title: "HR Analytics: Data-Driven Decision Making",
            category: "HR Analytics",
            description: "Leverage HR data to make smarter business decisions.",
            image: "https://i.ibb.co/jvgcK75n/hr.jpg",
        },
        {
            id: 11,
            title: "The Future of Employee Benefits: What to Expect in 2025",
            category: "Employee Benefits",
            description: "Explore upcoming trends in employee benefits and perks.",
            image: "https://i.ibb.co/vCRLxXq/employ.jpg",
        },
        {
            id: 12,
            title: "How to Handle Workplace Conflicts Effectively",
            category: "Workplace Conflict",
            description: "Resolve conflicts smoothly with these proven techniques.",
            image: "https://i.ibb.co/4n7T31cN/slary.jpg",
        },
        {
            id: 13,
            title: "Onboarding Best Practices for New Employees",
            category: "Employee Onboarding",
            description: "Ensure a smooth onboarding process with these key steps.",
            image: "https://i.ibb.co/jvgcK75n/hr.jpg",
        },
        {
            id: 14,
            title: "HR Compliance: Avoiding Legal Pitfalls",
            category: "HR Compliance",
            description: "Stay compliant with HR laws and regulations to avoid fines.",
            image: "https://i.ibb.co/vCRLxXq/employ.jpg",
        },
        {
            id: 15,
            title: "How to Create an Effective Employee Wellness Program",
            category: "Employee Wellness",
            description: "Support employee well-being with a well-planned wellness initiative.",
            image: "https://i.ibb.co/4n7T31cN/slary.jpg",
        },
        {
            id: 16,
            title: "Recruitment Strategies for a Competitive Job Market",
            category: "Talent Acquisition",
            description: "Attract top talent with smart recruitment strategies.",
            image: "https://i.ibb.co/jvgcK75n/hr.jpg",
        },
        {
            id: 17,
            title: "Managing Employee Turnover: Strategies to Retain Top Talent",
            category: "Employee Retention",
            description: "Reduce turnover rates and keep your best employees engaged.",
            image: "https://i.ibb.co/vCRLxXq/employ.jpg",
        },
        {
            id: 18,
            title: "Effective Time Management Techniques for HR Professionals",
            category: "Time Management",
            description: "Boost efficiency and manage HR tasks effectively.",
            image: "https://i.ibb.co/4n7T31cN/slary.jpg",
        },
        {
            id: 19,
            title: "Top Leadership Skills Every HR Manager Should Have",
            category: "Leadership",
            description: "Develop leadership skills that will set you apart in HR management.",
            image: "https://i.ibb.co/jvgcK75n/hr.jpg",
        },
        {
            id: 20,
            title: "How to Foster Employee Motivation and Job Satisfaction",
            category: "Employee Motivation",
            description: "Keep your employees motivated with these practical strategies.",
            image: "https://i.ibb.co/vCRLxXq/employ.jpg",
        }
    ];
    
    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`px-4 md:px-20 ${location.pathname === "/blog" && "py-20"}`}>
            <div
                className="text-center mb-10">
                <Heading
                    title={"Blog & Resource Center"}
                    subtile={"Explore valuable content about HR trends, employee management tips, and more."}
                ></Heading>
            </div>

            {/* Search and Filter */}
            {location.pathname == "/blog" &&
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="w-full md:w-2/3 flex items-center bg-white shadow-md rounded-md p-3">
                        <FaSearch className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="outline-none w-full text-gray-600"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="btn btn-outline border-primary-color text-primary-color flex items-center">
                            <BiCategory className="mr-2" /> Filter by Category
                        </button>
                    </div>
                </div>
            }

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs?.slice(0, location.pathname === "/" ? 3 : blogs.length).map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, scale: 0.9 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.5, delay: 0.2, ease:"easeInOut"}}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                            <p className="text-sm  text-primary-color mt-1">{blog.category}</p>
                            <p className="text-gray-600 mt-3">{blog.description}</p>
                            <button className="btn btn-link text-primary-color mt-4">
                                Read More →
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;