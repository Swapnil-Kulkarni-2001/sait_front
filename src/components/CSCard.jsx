import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";

const CSCard = () => {
    return (
        <div className="shadow-2xl rounded-xl relative bg-[url(https://source.unsplash.com/random?event)] overflow-hidden bg-cover bg-no-repeat bg-center w-72 md:w-[19rem] h-[22rem]">
            <div className="date absolute top-0 left-0 rounded-tl-xl bg-[#00c7e6] text-white p-3">
                <span className="day block text-center font-bold text-2xl text-sh">15</span>
                <span className="month block text-center uppercase text-xs">Aug</span>
                <span className="year block text-center text-xs">2016</span>
            </div>

            <div className="absolute flex flex-col bottom-0 w-full translate-y-24 duration-300 transition-all hover:translate-y-0">
                <div className="content p-[1em]  flex flex-col bg-white  shadow overflow-y-hidden hover:overflow-y-scroll">
                    <div className="flex flex-row items-center">
                        <span className="author text-xs">Swapnil, </span>
                        <span className="author text-xs">Nidesh</span>
                        <HiDownload className="text-xl text-gray-600 cursor-pointer ml-auto" />
                    </div>
                    <h1 className="title my-3"><a href="#" className="font-poppins text-sm text-black">Boxing icon has the will for a couple more fights</a></h1>
                    <p className="text h-20 m-0 font-poppins text-sm text-gray-600">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years. major boxing blockbuster in the nation after 43 years.major boxing blockbuster in the nation after 43 years.major boxing blockbuster in the nation after 43 years.</p>                    
                </div>
            </div>
        </div>
    );
}

export default CSCard;