import React, { useContext } from 'react';
import { FaBars, FaBlog } from 'react-icons/fa';
import { FaDollarSign, FaHistory, FaHome, FaList, FaTasks, FaUpload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import UserProfile from '../pages/Shared/UserProfile/UserProfile';
import useVerifyAdmin from '../hooks/useVerifyAdmin';
import useAllUsers from '../hooks/useAllUsers';
import { AuthContext } from '../providers/AuthProvider';
import { BiHomeAlt, BiMessage } from "react-icons/bi";
import { MdContactPhone, MdPeople } from "react-icons/md";
const DropDown = () => {
    const { user } = useContext(AuthContext)
    const [allUser] = useAllUsers()
    const [verifyAdmin] = useVerifyAdmin()
    const filterData = allUser.find((item) => item?.email === user?.email)
    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn px-2 rounded-full border-none lg:hidden text-white bg-transparent ">
                    <FaBars />
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content z-30 bg-primary-color text-white rounded-box  mt-3 w-52 p-2 shadow px-3 py-3">
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
                    <div className="border border-t my-3"></div>
                    <Link to="/" className="flex items-center gap-3 text-lg font-bold" ><BiHomeAlt></BiHomeAlt>Home</Link>
                    <Link to="/contact-us" className="flex items-center gap-3 text-lg font-bold" ><MdContactPhone></MdContactPhone> Contact Us</Link>
                    <Link to="/blog" className="flex items-center gap-3 text-lg font-bold" ><FaBlog/>Blog</Link>
                </ul>
            </div>
        </div>
    );
};

export default DropDown;