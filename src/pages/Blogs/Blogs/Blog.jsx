import {useLocation} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import Heading from '../../Shared/Heading/Heading';

const Blog = () => {
    const location = useLocation() 
    console.log(location)
    const blogs = [
        {
            id: 1,
            title: "Top 5 Trends in HR Management for 2025",
            category: "HR Trends",
            description:
                "Discover the latest trends shaping the HR industry and how to stay ahead.",
            image: "https://i.ibb.co.com/HdGm8md/hr.jpg ",
        },
        {
            id: 2,
            title: "How to Improve Employee Engagement",
            category: "Employee Management",
            description:
                "Learn actionable strategies to boost employee productivity and satisfaction.",
            image: "https://i.ibb.co.com/Xsf4NTh/employ.jpg",
        },
        {
            id: 3,
            title: "The Ultimate Guide to Salary Management",
            category: "Salary Management",
            description:
                "Streamline your salary processes with these expert tips.",
            image: "https://i.ibb.co.com/XWSMzNc/slary.jpg",
        },
    ];



    return (
        <div className=" py-10 px-4 md:px-20">
            <div className="text-center mb-10">
                <Heading
                    title={"Blog & Resource Center"}
                    subtile={"Explore valuable content about HR trends, employee management tips, and more."}
                ></Heading>
            </div>

            {/* Search and Filter */}
            { location.pathname == "/blog" &&
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="w-full md:w-2/3 flex items-center bg-white shadow-md rounded-md p-3">
                    <FaSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="outline-none w-full text-gray-600"
                    />
                </div>
                <div className="mt-4 md:mt-0">
                    <button className="btn btn-outline btn-primary flex items-center">
                        <BiCategory className="mr-2" /> Filter by Category
                    </button>
                </div>
            </div>
            }

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;