import React from "react";
import HomeClipArt from "../assets/saitweb.png";
const AfterNav = () => {
    return (
        <div className="bg-gradient-to-r from-[#d9fef7] to-[#f3fcff] h-[45rem] flex flex-col sm:flex-row">
            <h1 className="text-6xl text-center mt-4 text-black font-semibold sm:w-80 sm:mt-52 sm:ml-52 sm:text-8xl sm:text-left">We are
                <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500">SAIT</h1>
            </h1>
            <img src={HomeClipArt} className="w-[28rem] h-[20rem] mt-12 order-first sm:order-last sm:w-[54rem] sm:h-[40rem] sm:mt-0 sm:ml-8"/>
        </div>
    );
}

export default AfterNav;