import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-neutral gap-2 text-white ">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to={'dashboard'}>Dashboard</NavLink></li>
                    <li><NavLink to={'addReview'}>Add Review</NavLink></li>
                    <li><NavLink to={'addTool'}>Add Tool</NavLink></li>
                    <li><NavLink to={'myProfile'}>My Profile</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;