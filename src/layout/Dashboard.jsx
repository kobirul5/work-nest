import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="min-w-[250px] min-h-screen flex flex-col text-white bg-[#014E4E] p-5 gap-4" >
                <Link className="btn" to="/">Home</Link>
                {/* employ */}
                <Link className="btn" to="/dashboard/work-sheet">Employ Task</Link>
                {/* HR */}
                
                {/* admin */}
            </div>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;