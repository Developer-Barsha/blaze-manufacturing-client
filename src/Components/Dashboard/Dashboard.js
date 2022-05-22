import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label for="dashboard-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet/>
            </div>
            <div class="drawer-side">
                <label for="dashboard-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-neutral gap-2 text-white ">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to={'/dashboard'}>Add Review</NavLink></li>
                    <li><NavLink to={'/dashboard/addTool'}>Add Tool</NavLink></li>
                    <li><NavLink to={'/dashboard/purchase'}>Manage Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;