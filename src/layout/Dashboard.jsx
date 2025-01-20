import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import UserProfile from "../pages/Shared/UserProfile/UserProfile";
import useAllUsers from "../hooks/useAllUsers";
import Spinner from "../pages/Shared/Spinner/Spinner";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaDollarSign, FaHistory, FaHome, FaList, FaTasks, FaUpload } from "react-icons/fa";
import { MdContactPhone, MdPeople } from "react-icons/md";
import { BiHomeAlt, BiMessage } from "react-icons/bi";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [allUser, isLoading] = useAllUsers()
    const filterData = allUser.find((item) => item?.email === user?.email)

    return (
        <div className="flex flex-col md:flex-row container mx-auto">
            <div className="min-w-[250px] min-h-screen flex flex-col text-white bg-[#014E4E] p-5 gap-4" >
                <UserProfile></UserProfile>
                <Link to="/dashboard" className="flex items-center gap-3 text-lg font-bold"><FaHome></FaHome> Dashboard Home</Link>
                {/* employ: TODO: fixed it  */}
                {
                    filterData?.role == "employee" && <>
                        <Link to="/dashboard/work-sheet" className="flex items-center gap-3 text-lg font-bold" ><FaTasks></FaTasks> Employ Task</Link>
                        <Link to="/dashboard/payment-history" className="flex items-center gap-3 text-lg font-bold" ><FaHistory></FaHistory> History</Link>
                    </>
                }
                {/* HR */}
                {
                    filterData?.role === "hr" && <>
                        <Link to="/dashboard/employee-list"  className="flex items-center gap-3 text-lg font-bold" ><FaList></FaList> Employ List</Link>
                        <Link to="/dashboard/progress"  className="flex items-center gap-3 text-lg font-bold" ><FaUpload></FaUpload> Progress</Link>
                    </>
                }
                {/* admin */}
                {
                    filterData?.role === "admin" && <>
                        <Link to="/dashboard/all-employee-list"  className="flex items-center gap-3 text-lg font-bold" ><MdPeople></MdPeople> All employee</Link>
                        <Link to="/dashboard/payroll"  className="flex items-center gap-3 text-lg font-bold" ><FaDollarSign></FaDollarSign> Payment </Link>
                        <Link to="/dashboard/massage" className="flex items-center gap-3 text-lg font-bold"  ><BiMessage></BiMessage> Massage</Link>
                    </>
                }
                <div className="border border-t"></div>
                <Link to="/"  className="flex items-center gap-3 text-lg font-bold" ><BiHomeAlt></BiHomeAlt>Home</Link>
                <Link to="/contact-us"  className="flex items-center gap-3 text-lg font-bold" ><MdContactPhone></MdContactPhone> Contact Us</Link>
            </div>
            <Toaster></Toaster>
            <section className="flex-grow px-5 w-full ">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;