import { useLocation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import Heading from '../../Shared/Heading/Heading';
import {motion} from "motion/react"
import { useContext, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const {theme} = useContext(ThemeContext)
    const location = useLocation()
    const blogs = [
        {
            id: 1,
            title: "Top 5 Trends in HR Management for 2025",
            category: "HR Trends",
            description: "Discover the latest trends shaping the HR industry and how to stay ahead.",
            image: "https://i.ibb.co.com/xK0cNnT4/blog-1.jpg",
        },
        {
            id: 2,
            title: "How to Improve Employee Engagement",
            category: "Employee Management",
            description: "Learn actionable strategies to boost employee productivity and satisfaction.",
            image: "https://i.ibb.co.com/DPJW6KCB/blog-2.jpg",
        },
        {
            id: 3,
            title: "The Ultimate Guide to Salary Management",
            category: "Salary Management",
            description: "Streamline your salary processes with these expert tips.",
            image: "https://i.ibb.co.com/prhpMXGp/blog-3.jpg",
        },
        {
            id: 4,
            title: "AI in HR: How Technology is Changing Recruitment",
            category: "HR Technology",
            description: "Explore how artificial intelligence is transforming the hiring process.",
            image: "https://i.ibb.co.com/v4tJcHxS/blog-4.jpg",
        },
        {
            id: 5,
            title: "10 Tips for Effective Remote Work Management",
            category: "Remote Work",
            description: "Learn how to manage remote teams efficiently and keep them productive.",
            image: "https://i.ibb.co.com/0jWS5sjC/blog-5.jpg",
        },
        {
            id: 6,
            title: "Workplace Diversity & Inclusion: Best Practices",
            category: "Diversity & Inclusion",
            description: "Create an inclusive work environment with these key strategies.",
            image: "https://i.ibb.co.com/39T5hS5L/blog-6.jpg",
        },
        {
            id: 7,
            title: "How to Conduct Performance Reviews That Actually Work",
            category: "Performance Management",
            description: "Make performance evaluations meaningful and effective for employees.",
            image: "https://i.ibb.co.com/Ng3j4yYC/blog-7.jpg",
        },
        {
            id: 8,
            title: "Payroll Management: Common Mistakes & How to Avoid Them",
            category: "Payroll Management",
            description: "Avoid costly payroll errors with these expert insights.",
            image: "https://i.ibb.co.com/G47MQKps/blog-8.jpg",
        },
        {
            id: 9,
            title: "Building a Strong Company Culture: Where to Start?",
            category: "Company Culture",
            description: "Understand how to foster a positive and engaging workplace culture.",
            image: "https://i.ibb.co.com/PbB6mh0/blog-9.jpg",
        },
        {
            id: 10,
            title: "HR Analytics: Data-Driven Decision Making",
            category: "HR Analytics",
            description: "Leverage HR data to make smarter business decisions.",
            image: "https://i.ibb.co.com/4nZxZXxS/blog-10.jpg",
        },
        {
            id: 11,
            title: "The Future of Employee Benefits: What to Expect in 2025",
            category: "Employee Benefits",
            description: "Explore upcoming trends in employee benefits and perks.",
            image: "https://i.ibb.co.com/5W1WJF6g/blog-11.jpg",
        },
        {
            id: 12,
            title: "How to Handle Workplace Conflicts Effectively",
            category: "Workplace Conflict",
            description: "Resolve conflicts smoothly with these proven techniques.",
            image: "https://i.ibb.co.com/RGNw8kNP/blog-12.jpg",
        },
        {
            id: 13,
            title: "Onboarding Best Practices for New Employees",
            category: "Employee Onboarding",
            description: "Ensure a smooth onboarding process with these key steps.",
            image: "https://i.ibb.co.com/VY2ZVCPf/blog-13.jpg",
        },
        {
            id: 14,
            title: "HR Compliance: Avoiding Legal Pitfalls",
            category: "HR Compliance",
            description: "Stay compliant with HR laws and regulations to avoid fines.",
            image: "https://i.ibb.co.com/cKt0yxg5/blog-14.jpg",
        },
        {
            id: 15,
            title: "How to Create an Effective Employee Wellness Program",
            category: "Employee Wellness",
            description: "Support employee well-being with a well-planned wellness initiative.",
            image: "https://i.ibb.co.com/1fGGdrp2/blog-15.jpg",
        },
        {
            id: 16,
            title: "Recruitment Strategies for a Competitive Job Market",
            category: "Talent Acquisition",
            description: "Attract top talent with smart recruitment strategies.",
            image: "https://i.ibb.co.com/Myttvc4v/blog-16.jpg",
        },
        {
            id: 17,
            title: "Managing Employee Turnover: Strategies to Retain Top Talent",
            category: "Employee Retention",
            description: "Reduce turnover rates and keep your best employees engaged.",
            image: "https://i.ibb.co.com/ynNKKsKF/blog-17.jpg",
        },
        {
            id: 18,
            title: "Effective Time Management Techniques for HR Professionals",
            category: "Time Management",
            description: "Boost efficiency and manage HR tasks effectively.",
            image: "https://i.ibb.co.com/XrxGgH6h/blog-18.jpg",
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
                    <div className={`w-full md:w-2/3 flex items-center ${theme == "light" ? "bg-white":"bg-[#1f1f1f]"} shadow-md rounded-md p-3`}>
                        <FaSearch className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="outline-none w-full text-primary-color px-5 py-1 rounded-md"
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
                        className={`${theme == "light" ? "bg-white":"bg-[#1f1f1f]"} shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105`}
                    >
                        <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold ">{blog.title}</h3>
                            <p className="text-sm  text-primary-color mt-1">{blog.category}</p>
                            <p className={`${theme=== "light"? "text-gray-600":"text-[#777777]"}  mt-3`}>{blog.description}</p>
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