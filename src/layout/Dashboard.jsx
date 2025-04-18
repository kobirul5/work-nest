import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import UserProfile from "../pages/Shared/UserProfile/UserProfile";
import useAllUsers from "../hooks/useAllUsers";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaBlog, FaDollarSign, FaHistory, FaHome, FaList, FaTasks, FaUpload } from "react-icons/fa";
import { MdContactPhone, MdPeople } from "react-icons/md";
import { BiHomeAlt, BiMessage } from "react-icons/bi";
import useVerifyAdmin from "../hooks/useVerifyAdmin";
import DashboardNav from "../components/DashbordNav";
import { ThemeContext } from "../providers/ThemeProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const {theme} = useContext(ThemeContext)
    const [allUser] = useAllUsers()
    const [verifyAdmin] = useVerifyAdmin()
    const filterData = allUser.find((item) => item?.email === user?.email)

    return (
        <div className={`flex roboto flex-col md:flex-row  mx-auto overflow-y-scroll custom-scrollbar ${theme == "light" ? "text-[#1d1d1d]":"bg-[#161616]"} text-[#01a1a1]`}>
            {/*  DashBoard side bar */}
            <div className="min-w-[250px] max-h-screen hidden lg:flex flex-col  text-white bg-[#014E4E] p-5  gap-4 overflow-y-scroll custom-scrollbar pb-10" >
                <UserProfile></UserProfile>
                <Link to="/dashboard" className="flex items-center gap-3 text-lg font-bold"><FaHome></FaHome> Dashboard Home</Link>
                {/* employ: TODO: fixed it  */}
                {
                    filterData?.role == "employee" && <>
                        <Link to="/dashboard/work-sheet" className="flex items-center gap-3 text-lg font-bold" ><FaTasks></FaTasks> Employee Task</Link>
                        <Link to="/dashboard/payment-history" className="flex items-center gap-3 text-lg font-bold" ><FaHistory></FaHistory> History</Link>
                    </>
                }
                {/* HR */}
                {
                    filterData?.role === "hr" && <>
                        <Link to="/dashboard/employee-list" className="flex items-center gap-3 text-lg font-bold" ><FaList></FaList> Employee List</Link>
                        <Link to="/dashboard/progress" className="flex items-center gap-3 text-lg font-bold" ><FaUpload></FaUpload> Progress</Link>
                    </>
                }
                {/* admin */}
                {
                    verifyAdmin && <>
                        <Link to="/dashboard/all-employee-list" className="flex items-center gap-3 text-lg font-bold" ><MdPeople></MdPeople> All employee</Link>
                        <Link to="/dashboard/payroll" className="flex items-center gap-3 text-lg font-bold" ><FaDollarSign></FaDollarSign> Payment </Link>
                        <Link to="/dashboard/massage" className="flex items-center gap-3 text-lg font-bold"  ><BiMessage></BiMessage> Massage</Link>
                    </>
                }
                <div className="border border-t"></div>
                <Link to="/" className="flex items-center gap-3 text-lg font-bold" ><BiHomeAlt></BiHomeAlt>Home</Link>
                <Link to="/contact-us" className="flex items-center gap-3 text-lg font-bold" ><MdContactPhone></MdContactPhone> Contact Us</Link>
                <Link to="/blog" className="flex items-center gap-3 text-lg font-bold" ><FaBlog />Blog</Link>
            </div>
            <Toaster></Toaster>
            {/*  main */}
            <section className="flex-grow px-5 bg-w w-full lg:max-h-screen lg:overflow-y-scroll overflow-x-auto custom-scrollbar ">
                <DashboardNav />
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;