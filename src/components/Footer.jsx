import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/SAIT_logo_black_text.png';
import wce_logo from '../assets/wce-logo.png'

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";



const Footer = () => {
    return (
        <div className="flex flex-col bg-[#f8f9fa] h-auto w-full pb-10 md:flex-row pt-10">
            <div className="md:flex md:flex-col">
                <div className="flex flex-row mt-5 mx-5 items-center">
                    <img src={logo} className="h-20 w-20" />
                    <h1 className="font-poppins text-center md:m-2">Student's assocaiation of Information Technology</h1>
                </div>
                <div className="h-[1px] bg-gray-300 my-3 mx-5 md:hidden"></div>
                <div className="flex flex-row items-center mx-5 mt-4 ">
                    <img src={wce_logo} className="h-16 w-20" />
                    <div>
                        <h1 className="text-center font-poppins md:m-2">Walchand College Of Engineering, Vishrambag, Sangli, Maharashtra - 416415</h1>
                    </div>
                </div>
            </div>

            <div className="h-[1px] bg-gray-300 my-5 mx-5 md:hidden"></div>
            <div className="flex flex-row mx-5 md:mt-5">
                <div className="flex flex-col ml-5">
                    <h1 className="font-poppins font-semibold">GENERAL</h1>
                    <NavLink className="font-poppins text-[#918ba8] mt-3" to="/">Home</NavLink>
                    <NavLink className="font-poppins text-[#918ba8] mt-3" to="/events">Events</NavLink>
                    <NavLink className="font-poppins text-[#918ba8] mt-3" to="/clubservices">Club-Services</NavLink>
                    <NavLink className="font-poppins text-[#918ba8] mt-3" to="/members">About us</NavLink>
                </div>
                <div className="ml-auto mr-5 md:ml-20">
                    <h1 className="font-poppins font-semibold">FOLLOW US</h1>
                    <div className="flex flex-row items-center mt-3">
                        <AiFillLinkedin className="text-lg text-gray-500 mr-2" />
                        <a href="https://www.w3schools.com" className="font-poppins text-[#918ba8]">LinkedIn</a>
                    </div>
                    <div className="flex flex-row items-center mt-3">
                        <AiFillFacebook className="text-lg text-gray-500 mr-2" />
                        <a href="https://www.w3schools.com" className="font-poppins text-[#918ba8]">Facebook</a>
                    </div>
                    <div className="flex flex-row items-center mt-3">
                        <AiFillInstagram className="text-lg text-gray-500 mr-2" />
                        <a href="https://www.w3schools.com" className="font-poppins text-[#918ba8]">Instagram</a>
                    </div>
                    <div className="flex flex-row  items-center mt-3">
                        <AiOutlineTwitter className="text-lg text-gray-500 mr-2" />
                        <a href="https://www.w3schools.com" className="font-poppins text-[#918ba8]">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="mx-5 mt-8 md:mt-5">
                <h1 className="text-gray-600 font-poppins text-center">WCE SAIT© All Rights Reserved. © 2023</h1>
            </div>

        </div>
    );
}

export default Footer;