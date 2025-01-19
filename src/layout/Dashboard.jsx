import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import UserProfile from "../pages/Shared/UserProfile/UserProfile";
import useAllUsers from "../hooks/useAllUsers";
import Spinner from "../pages/Shared/Spinner/Spinner";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [allUser, isLoading] = useAllUsers()
    const filterData = allUser.find((item) => item?.email === user?.email)

    return (
        <div className="flex flex-col md:flex-row">
            <div className="min-w-[250px] min-h-screen flex flex-col text-white bg-[#014E4E] p-5 gap-4" >
                <UserProfile></UserProfile>
                <Link className="btn" to="/">Home</Link>
                {/* employ: TODO: fixed it  */}
                <Link className="btn" to="/dashboard/work-sheet">Employ Task</Link>
                <Link className="btn" to="/dashboard/payment-history">History</Link>

                {/* {
                    filterData?.role == "employee" && <Link className="btn" to="/dashboard/work-sheet">Employ Task</Link>
                } */}
                {/* HR */}

                <Link to="/dashboard/employee-list" className="btn">Employ List</Link>
                <Link to="/dashboard/progress" className="btn">Progress</Link>
                {/* {
                    filterData?.role === "hr" && <>
                        <Link to="/dashboard/employee-list" className="btn">Employ List</Link>
                        <Link to="/dashboard/progress" className="btn">Progress</Link>
                    </>
                } */}
                {/* admin */}

                <Link to="/dashboard/all-employee-list" className="btn">All employee</Link>
                <Link to="/dashboard/payroll" className="btn">Payment </Link>   
                {/* {
                    filterData?.role === "admin" && <>
                        <Link to="/dashboard/all-employee-list" className="btn">All employee</Link>
                        <Link to="/dashboard/payroll" className="btn">Payment </Link>
                    </>
                } */}

            </div>
            <Toaster></Toaster>
            <section className="flex-grow px-5">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;