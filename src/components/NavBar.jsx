import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className={`bg-[#fbfbfd] z-20 flex flex-col sm:flex-row h-20 w-full sm:items-center sticky top-0 transition-all duration-300 `}>
            <div className={`flex flex-row items-center w-full h-20 md:w-auto`}>
                <img className="w-16 h-16 ml-3 mt-2 sm:ml-6" src={logo} />
                <div className="flex">
                    <h1 className="text-[#4a4a4a] font-semibold font-poppins  text-3xl ">SA</h1>
                    <h1 className="font-semibold font-poppins  text-3xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500">IT</h1>
                </div>
                <div onClick={() => setOpen(!open)} className="ml-auto mr-6 sm:hidden">
                    {
                        open ? <GrClose className="text-2xl text-black" /> : <GiHamburgerMenu className="text-2xl text-black" />
                    }
                </div>
            </div>
            <div className={`absolute flex flex-col justify-evenly bg-white sm:bg-[#fbfbfd] h-auto sm:h-auto top-20 left-0 w-full transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 sm:opacity-100'} sm:flex-row sm:justify-end sm:w-auto  sm:static sm:ml-auto sm:flex sm:items-center`}>
                <div onClick={() => setOpen(false)} className="my-2">
                    <NavLink className={({ isActive }) =>
                        isActive ? 'mr-6 px-4 ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#04b0cc]' :
                            'mr-6 px-4 ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] p-3 text-xl sm:text-sm  font-poppins rounded-3xl text-[#4a4a4a] hover:text-[#04b0cc]'} to='/'>Home</NavLink>
                </div>
                <div className="group my-2">
                    <span className={
                        'mr-6 px-4 ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#4a4a4a] hover:text-[#04b0cc] cursor-pointer'} >Activities</span>

                    <div className="flex-col bg-white md:shadow-2xl md:rounded-2xl mt-2 md:p-3 hidden group-hover:flex md:absolute">

                        <div onClick={() => setOpen(false)} className="my-2">
                            <NavLink className={({ isActive }) =>
                                isActive ? 'mr-6 px-4 ml-10 my-2 md:my-0 md:ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] md:p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#04b0cc]' :
                                    'mr-6 px-4 ml-10 my-2 md:my-0 md:ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] md:p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#4a4a4a] hover:text-[#04b0cc]'} to='/clubservices'>Club Services</NavLink>
                        </div>
                        <div onClick={() => setOpen(false)} className="my-2">
                            <NavLink className={({ isActive }) =>
                                isActive ? 'mr-6 px-4 ml-10 my-2 md:my-0 md:ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] md:p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#04b0cc]' :
                                    'mr-6 px-4 ml-10 my-2 md:my-0 md:ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] md:p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#4a4a4a] hover:text-[#04b0cc]'} to='/events'>Events</NavLink>
                        </div>
                        <div onClick={() => setOpen(false)} className="my-2">
                            <NavLink className={({ isActive }) =>
                                isActive ? 'mr-6 px-4 ml-10 my-2 md:my-0 md:ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] md:p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#04b0cc]' :
                                    'mr-6 px-4 ml-10 my-2 md:my-0 md:ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] md:p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#4a4a4a] hover:text-[#04b0cc]'} to='/otheractivities'>Other activities </NavLink>
                        </div>
                    </div>

                </div>

                <div onClick={() => setOpen(false)} className="my-2">
                    <NavLink className={({ isActive }) =>
                        isActive ? 'mr-6 px-4 ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#04b0cc]' :
                            'mr-6 px-4 ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#4a4a4a] hover:text-[#04b0cc]'} to='/members'>About Us</NavLink>
                </div>
                <div onClick={() => setOpen(false)} className="my-2">
                    <NavLink className={({ isActive }) =>
                        isActive ? 'mr-6 px-4 ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#04b0cc]' :
                            'mr-6 px-4 ml-3 transition duration-300 sm:hover:bg-[#f8f9fa] p-3 text-xl sm:text-sm font-poppins rounded-3xl text-[#4a4a4a] hover:text-[#04b0cc]'} to='/contact'>Contact</NavLink>
                </div>
                <button className="mr-6 my-5 ml-8 bg-[#00afcb] rounded-xl px-8 font-semibold text-white p-2 hover:bg-[#00c7e6]">Techfusion</button>
            </div>
        </div>
    );
}

export default NavBar;