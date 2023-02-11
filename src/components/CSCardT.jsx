import React from "react";
import { HiDownload } from "react-icons/hi";
const CSCardT = ({data}) => {
    return (
        <div className="group flex flex-col relative shadow-2xl rounded-xl w-72 md:w-[19rem] h-[22rem] ">
            <div className="date absolute top-0 left-0 rounded-tl-xl bg-[#00c7e6] text-white p-3 duration-300 transition-all group-hover:hidden">
                <span className="day block text-center font-bold text-2xl text-sh">{data.date[0]}</span>
                <span className="month block text-center uppercase text-xs">{data.date[1]}</span>
                <span className="year block text-center text-xs">{data.date[2]}</span>
            </div>
            {/* <div className="rounded-tl-xl rounded-tr-xl  bg-[url(https://firebasestorage.googleapis.com/v0/b/sait-website.appspot.com/o/club_services%2Fcrypto_2022.jpg?alt=media&token=58437825-1eeb-4f95-9354-175b4d332db0)] overflow-hidden bg-cover bg-no-repeat bg-center w-full h-[70%]">
            </div> */}

            <img src={data.poster} className="rounded-tl-xl rounded-tr-xl overflow-hidden bg-cover bg-no-repeat bg-center w-full h-[70%]"/>

            <div className="h-[30%] bg-white overflow-hidden duration-300 transition-all hover:overflow-y-scroll rounded-br-xl rounded-bl-xl hover:absolute hover:bottom-0 hover:h-[58%] ">
                <div className="p-[1em]">
                    <div className="flex flex-row items-center">
                        {/* <span className="author text-xs">Swapnil, </span>
                        <span className="author text-xs">Nidesh</span> */}
                        {
                            data.name.map((item,index)=><span key={index} className="text-xs">{item} &nbsp;</span>)
                        }
                        <HiDownload onClick={()=>{parent.open(data.resource_url)}} className="text-xl text-gray-600 cursor-pointer ml-auto" />
                    </div>
                    <h1 className="title my-6 font-poppins text-sm text-black">{data.title}</h1>
                    <p className="text h-20 m-0 font-poppins text-sm text-gray-600">{data.description}</p>
                </div>
            </div>

        </div>
    );
}

export default CSCardT;