import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
    <div className='font-bold playfair text-blue-900'>
    <NavLink className={'mx-2'} to={'/'}>Dashboard</NavLink>
    
    <NavLink className={'mx-2'} to={'/relaycontrol'}>Switches</NavLink>
     <NavLink className={'mx-2'} to={'/Schedule'}>Schedule</NavLink>
     
     <NavLink to={'/Users'}>Users</NavLink>
     
    </div>
    </>
    return (
        <div>
                 <div className="navbar bg-blue-100 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <NavLink className={'btn btn-ghost text-blue-900 text-xl playfair'} to={'/'}>HomeSync</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink className={'btn btn-primary font-bold playfair text-white'} to={'/Sign'}>Sign Up</NavLink>
  </div>
        </div>
        </div>
    );
};

export default Navbar;