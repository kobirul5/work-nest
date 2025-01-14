import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="min-w-[250px] min-h-screen text-white bg-[#014E4E]" >
            dashboard
            </div>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;