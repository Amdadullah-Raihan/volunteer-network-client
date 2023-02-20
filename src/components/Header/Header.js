import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import heroImg from '../../images/heroImg.jpg'
import logo from '../../images/logos/Group 1329.png'


const Header = () => {
    const { user, handleSignOut } = useFirebase();

    return (
        <header className='xl:container lg:pl-8 lg:pr-10 mx-auto py-4' >
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/donations'>Donations</Link></li>
                            <li><Link to='/my-events'>My Events</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            {
                                user?.email ? <li> <button onClick={handleSignOut}>Log out</button></li> :

                                    <li>  <Link to='/login'>Log in</Link></li>
                            }
                            {
                                user?.email && <li><Link to='/dashboard'>Dashboard</Link></li>
                            }

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='w-40' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/donations'>Donations</Link></li>
                        <li><Link to='/my-events'>My Events</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            user?.email && <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                        {
                            user?.email ? <li> <button onClick={handleSignOut}>Log out</button></li> :

                                <li><Link to='/login'>Log in</Link></li>
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#3F90FC] border-none text-white">Get Started</button>
                </div>
            </div>

        </header>
    );
};

export default Header;