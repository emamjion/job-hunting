import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='flex justify-between px-72 pt-12 bg-[#F9F9FF]'>
            <h1 className='text-3xl font-bold'>Job Hunting</h1>
            <ul className=''>
                <NavLink className="me-6 text-[#757575]" to="/">Home</NavLink>
                <NavLink className="me-6 text-[#757575]" to="/statistics">Statistics</NavLink>
                <NavLink className="me-6 text-[#757575]" to="/applied-jobs">Applied Jobs</NavLink>
                <NavLink className="me-6 text-[#757575]" to="/blog">Blog</NavLink>
            </ul>
            <div>
                <button className='bg-[#7E90FE] px-7 py-4 rounded-lg text-white font-medium'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Header;