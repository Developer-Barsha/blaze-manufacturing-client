import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import CustomLink from './CustomLink';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [dbUser, setDbUser] = useState({});

    useEffect(() => {
        fetch(`https://blaze-manufacturing.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data));
    }, [dbUser, user?.email])

    const menu = <>
        <CustomLink to={'/'}>Home</CustomLink>
        <CustomLink to={'/myPortfolio'}>My Portfolio</CustomLink>
        <CustomLink to={'/blogs'}>Blogs</CustomLink>
        {user && <CustomLink to={'/dashboard'}>Dashboard</CustomLink>}
        {!user ?
            <button className='btn' onClick={() => navigate('/login')}>Login</button> :
            <p className='text-primary font-bold'>{dbUser?.name ? dbUser?.name : user?.displayName}</p>}
        {user ?
            <button className='btn btn-primary' onClick={() => {
                signOut(auth)
                localStorage.removeItem('accessToken');
            }}>Sign Out</button> :
            <button className='btn' onClick={() => navigate('/signup')}>Signup</button>}
    </>;

    return (
        <div className="navbar w-full bg-purple-50 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 py-3 shadow bg-base-100 rounded-box w-52 gap-8 items-center">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <span className='text-primary'>B.</span>M Tools</a>


                <label tabIndex="0" htmlFor="dashboard-drawer" className="btn mr-0 ml-auto drawer-button lg:hidden btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-8 items-center">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;