import React from 'react';

const DashboardHome = () => {
    return (
        <div>
            <main className="flex-1 p-8 overflow-y-scroll">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md p-6 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Total Employees</h2>
                        <p className="text-3xl font-bold text-teal-800 mt-3">500+</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-md p-6 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Salary Paid</h2>
                        <p className="text-3xl font-bold text-teal-800 mt-3">$250,000</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-md p-6 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Pending Requests</h2>
                        <p className="text-3xl font-bold text-teal-800 mt-3">12</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <p>Employee John Doe received a salary of $5,000</p>
                                <span className="text-sm text-gray-500">2 hours ago</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <p>New employee Jane Smith added to the team</p>
                                <span className="text-sm text-gray-500">1 day ago</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <p>Payroll processed for December</p>
                                <span className="text-sm text-gray-500">3 days ago</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Employee Distribution</h3>
                            <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
                                <p className="text-gray-500">[Chart Placeholder]</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Salary Trends</h3>
                            <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
                                <p className="text-gray-500">[Chart Placeholder]</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Task Manager */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Manager</h2>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center">
                                <p>Approve leave requests</p>
                                <button className="btn btn-sm btn-primary">Mark Complete</button>
                            </li>
                            <li className="flex justify-between items-center">
                                <p>Review new employee profiles</p>
                                <button className="btn btn-sm btn-primary">Mark Complete</button>
                            </li>
                            <li className="flex justify-between items-center">
                                <p>Finalize payroll for January</p>
                                <button className="btn btn-sm btn-primary">Mark Complete</button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Announcements */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Announcements</h2>
                    <div className="bg-white shadow-md rounded-lg p-4">
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