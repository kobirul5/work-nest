import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="min-w-[250px] min-h-screen flex flex-col text-white bg-[#014E4E]" >
            <Link className="btn" to="/">Home</Link>
            <Link className="btn" to="/dashboard/work-sheet">Employ Task</Link>
            </div>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;