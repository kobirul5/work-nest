import React, { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeContext } from '../../../providers/ThemeProvider';

const DashboardHome = () => {
    const {theme} = useContext(ThemeContext)
    console.log(theme)

    const uData = [400000, 300000, 200000, 278000, 189000, 239000, 349000, 300000, 200000, 278000, 189000, 239000,];
    const pData = [240000, 139008, 980000, 390008, 480000, 380000, 430000, 300000, 200000, 278000, 189000, 239000,];
    const xLabels = [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (
        <div>
            <main className="flex-1 p-8 overflow-y-scroll">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold ">Dashboard Overview</h1>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className={` ${theme == "light" ? "bg-white":"bg-[#1f1f1f] text-[#777777]"} shadow-md p-6 rounded-lg text-center`}>
                        <h2 className="text-xl font-semibold ">Total Employees</h2>
                        <p className="text-3xl font-bold text-teal-800 mt-3">500+</p>
                    </div>

                    {/* Card 2 */}
                    <div  className={` ${theme == "light" ? "bg-white":"bg-[#1f1f1f] text-[#777777]"} shadow-md p-6 rounded-lg text-center`}>
                        <h2 className="text-xl font-semibold ">Salary Paid</h2>
                        <p className="text-3xl font-bold text-teal-800 mt-3">$250,000</p>
                    </div>

                    {/* Card 3 */}
                    <div  className={` ${theme == "light" ? "bg-white":"bg-[#1f1f1f] text-[#777777]"} shadow-md p-6 rounded-lg text-center`}>
                        <h2 className="text-xl font-semibold ">Pending Requests</h2>
                        <p className="text-3xl font-bold text-teal-800 mt-3">12</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                    <div  className={` ${theme == "light" ? "bg-white":"bg-[#1f1f1f] text-[#777777]"} shadow-md p-6 rounded-lg text-center`}>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <p>Employee John Doe received a salary of $5,000</p>
                                <span className="text-sm ">2 hours ago</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <p>New employee Jane Smith added to the team</p>
                                <span className="text-sm ">1 day ago</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <p>Payroll processed for December</p>
                                <span className="text-sm ">3 days ago</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold  mb-4">Analytics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div  className={` ${theme == "light" ? "bg-white":"bg-[#1f1f1f] text-[#777777] border-white border"} shadow-md p-6 rounded-lg text-center `}>
                            <h3 className="text-lg font-semibold  pb pb-10">Employee Distribution</h3>
                            <div className="h-40   rounded flex items-center justify-center pb-10">
                                <BarChart
                                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className={` ${theme == "light" ? "bg-white":"bg-[#1f1f1f] text-[#777777] border-white border"} shadow-md p-6 rounded-lg text-center `}>
                            <h3 className="text-lg font-semibold  mb-10">Monthly Salary Trends</h3>
                            <div className="h-40 rounded flex items-center justify-center">
                                <BarChart
                                    width={500}
                                    height={300}
                                    series={[
                                        { data: pData, label: 'pv', id: 'pvId' },
                                        { data: uData, label: 'uv', id: 'uvId' },
                                    ]}
                                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Task Manager */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold  mb-4">Task Manager</h2>
                    <div className={` ${theme == "light" ? "bg-white":"bg-[#1f1f1f] text-[#777777] border-white"} shadow-md p-6 rounded-lg text-center `}>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center">
                                <p>Approve leave requests</p>
                                <button className="btn  bg-primary-color text-white hover:text-black hover:border-primary-color">Mark Complete</button>
                            </li>
                            <li className="flex justify-between items-center">
                                <p>Review new employee profiles</p>
                                <button className="btn  bg-primary-color text-white hover:text-black hover:border-primary-color">Mark Complete</button>
                            </li>
                            <li className="flex justify-between items-center">
                                <p>Finalize payroll for January</p>
                                <button className="btn  bg-primary-color text-white hover:text-black hover:border-primary-color">Mark Complete</button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Announcements */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold  mb-4">Announcements</h2>
                    <div  className={` ${theme == "light" ? "bg-white":"bg-[#1f1f1f] text-[#777777] border-white"} shadow-md p-6 rounded-lg`}>
                        <p>
                            🎉 <span className="font-bold">Upcoming Event:</span> Annual HR Meetup on January 25th, 2025.
                        </p>
                        <p className="mt-2">
                            🚀 <span className="font-bold">Feature Update:</span> New employee onboarding tools will be live next
                            week.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardHome;