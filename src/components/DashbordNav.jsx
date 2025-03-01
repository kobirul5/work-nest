import { useContext } from "react"
import useAllUsers from "../hooks/useAllUsers"
import { AuthContext } from "../providers/AuthProvider"
import { FaBell } from "react-icons/fa"
import { BiMessage } from "react-icons/bi";
import { Link } from "react-router-dom"
import LogoutBtn from "./LogoutBtn";
import DropDown from "./DropDown";

const DashboardNav = () => {
    const { user } = useContext(AuthContext)
    const [allUser] = useAllUsers()
    const filterUser = allUser.find((item) => item?.email === user?.email)
    const notifications = [
        { id: 1, message: "New Employee Added: John Doe (Marketing)", time: "2 mins ago" },
        { id: 2, message: "Salary for January processed successfully!", time: "10 mins ago" },
        { id: 3, message: "Emma Watson requested leave (March 1-5)", time: "30 mins ago" },
        { id: 4, message: "Project deadline approaching: E-Commerce Upgrade", time: "1 hour ago" },
        { id: 5, message: "New Work-from-Home policy updated", time: "3 hours ago" },
    ];

    const messages = [
        { id: 1, sender: "Alice Johnson", text: "Can we reschedule the meeting?", time: "2 mins ago" },
        { id: 2, sender: "HR Department", text: "Your leave request has been approved!", time: "15 mins ago" },
        { id: 3, sender: "John Doe", text: "Reminder: Submit your project report.", time: "1 hour ago" },
        { id: 4, sender: "David Smith", text: "Payroll update for this month", time: "3 hours ago" },
        { id: 5, sender: "Admin", text: "New company policy update available.", time: "Yesterday" },
    ];

    return (
        <div className="navbar bg-primary-color rounded-full sticky top-4 z-20">
            <div className="flex-1">
                <DropDown></DropDown>
                <Link to="/dashboard" className="px-4 text-white">Dashboard</Link>
            </div>
            <div className="flex-none space-x-3 bg-primary-color">
                {/* massage */}
                <div className="dropdown dropdown-end bg-primary-color rounded-full text-white ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <p className="flex items-center gap-3 text-lg font-bold"  ><BiMessage></BiMessage></p>
                            <span className="badge badge-sm indicator-item">3</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content  z-[1] mt-3 w-52 shadow">
                        <div className="card-body bg-primary-color">
                            <ul className="max-h-64 overflow-auto">
                                {messages.map((msg) => (
                                    <li key={msg.id} className="p-3 border-b  text-sm">
                                        <p className="font-medium">{msg.sender}</p>
                                        <p className=" truncate">{msg.text}</p>
                                        <span className="text-xs ">{msg.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* notification */}
                <div className="dropdown dropdown-end bg-primary-color rounded-full text-white ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaBell className="text-xl" />
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content  z-[1] mt-3 w-52 shadow">
                        <div className="card-body bg-primary-color max-h-64 overflow-auto">
                            {notifications.map((notif) => (
                                <div key={notif.id} className="p-3 border-b bg-primary-color text-sm">
                                    <p>{notif.message}</p>
                                    <span className="text-xs text-gray-200">{notif.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Profile */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Photo"
                                src={filterUser?.image} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-primary-color text-white">
                        
                        <li><Link to="/profile">Profile</Link></li>
                        <li><LogoutBtn /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav