import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="min-w-[250px] min-h-screen flex flex-col text-white bg-[#014E4E] p-5 gap-4" >
                <Link className="btn" to="/">Home</Link>
                {/* employ */}
                <Link className="btn" to="/dashboard/work-sheet">Employ Task</Link>
                {/* HR */}
                <Link to="/dashboard/employee-list" className="btn">Employ List</Link>
                <Link to="/dashboard/progress" className="btn">Progress</Link>
                {/* admin */}
                <Link to="/dashboard/all-employee-list" className="btn">All employee</Link>
                <Link to="/dashboard/payroll" className="btn">Payment </Link>
            </div>
            <Toaster></Toaster>
            <section className="flex-grow px-5">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;