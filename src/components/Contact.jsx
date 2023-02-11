import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { useLocation } from "react-router-dom";

const Contact = () => {

    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[pathname]);

    return (
        <div className="bg-white md:bg-[#f7f7f7]">
            <div className="flex flex-col md:flex-row md:ml-36 pb-24">
                <div className="w-full flex  basis-1/2  flex-col md:justify-center items-center md:items-start">
                    <h1 className="text-2xl font-semibold font-poppins text-center md:text-5xl md:text-left mt-16">Get in touch with us</h1>
                    <div className="bg-[#00afcb] h-2 w-16 md:w-28 mt-5" />
                    <h1 className="font-poppins text-lg text-center text-black mx-2 md:mx-0 md:text-left mt-10">Let's make something big together.</h1>
                    <h1 className="font-poppins text-lg text-center text-black mt-3 mx-2 md:mx-0">Drop us a line, or give us a heads up if you're interested in visiting us.</h1>

                    <div className="flex-col mt-10 hidden md:flex items-start">
                        <div className="flex flex-row justify-center items-center">
                            <MdEmail className="text-3xl text-[#00afcb]" />
                            <h1 className="ml-5">swapnilkulkarni987@gmail.com</h1>
                        </div>
                        <div className="flex flex-row justify-center items-center mt-5">
                            <BsTelephoneFill className="text-3xl text-[#00afcb]" />
                            <h1 className="ml-5">+91-9898989898</h1>
                        </div>
                        <div className="flex flex-row justify-center items-center mt-5">
                            <ImLocation className="text-3xl text-[#00afcb]" />
                            <h1 className="ml-5">Walchand College of Engineering, Sangli, Vishrambag, Sangli, Maharashtra 416415</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[35rem] px-5 md:px-7 mt-5 md:mt-20 bg-white md:rounded-3xl md:shadow-2xl py-10 ">

                    <h1>Email</h1>
                    <input type="email" placeholder="your email" className="w-full h-12 border-2 px-2 mt-2 rounded-xl font-poppins text-sm focus:outline-none focus:border-[#2186c4] focus:ring-0 focus:ring-[#2186c4]" />

                    <h1 className="mt-5">Subject</h1>
                    <input type="text" placeholder="subject" className="w-full h-12 border-2 px-2 mt-2 rounded-xl font-poppins text-sm focus:outline-none focus:border-[#2186c4] focus:ring-0 focus:ring-[#2186c4]" />

                    <h1 className="mt-5">Message</h1>
                    <textarea placeholder="type message here" cols="5" className="w-full h-24 border-2 px-2 mt-2 rounded-xl font-poppins text-sm focus:outline-none focus:border-[#2186c4] focus:ring-0 focus:ring-[#2186c4]" />

                    <button className="bg-[#fe8164] hover:bg-[#fe6e4d] transition-all duration-500 hover:px-14 rounded-lg shadow-2xl text-white font-poppins font-semibold px-10 py-2 mt-5">SEND</button>

                </div>

                <div className="flex flex-col mt-10 md:hidden items-start px-5">
                    <div className="flex flex-row justify-center items-center">
                        <MdEmail className="text-3xl text-[#00afcb]" />
                        <h1 className="ml-5">swapnilkulkarni987@gmail.com</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-8">
                        <BsTelephoneFill className="text-3xl text-[#00afcb]" />
                        <h1 className="ml-5">+91-9898989898</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-5">
                        <ImLocation className="text-5xl text-[#00afcb]" />
                        <h1 className="ml-5 text-xs text-center">Walchand College of Engineering, Sangli, Vishrambag, Sangli, Maharashtra 416415</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;