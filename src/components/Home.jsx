import React, { useEffect } from "react";
import AfterNav from "./AfterNav";
import club_service_logo from "../assets/club_service.png";
import events_logo from "../assets/events_two.png";
import { FaRegLightbulb } from "react-icons/fa";
import { SlTrophy } from "react-icons/sl";
import img_prof from "../assets/blackAndWhiteProfile.jpg";
import { GrWorkshop } from "react-icons/gr";
import workshop from "../assets/wri.svg"
import { useLocation } from "react-router-dom";

const Home = () => {

    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[pathname]);


    return (
        <div>
            <AfterNav />
            <div className="flex flex-col justify-center items-center bg-white -translate-y-40 md:-translate-y-24 mx-6 sm:mx-28 rounded-3xl shadow-2xl h-auto pt-5 pb-10 px-5 md:px-10">
                <h1 className="text-xl font-poppins font-bold text-center mt-5 md:text-4xl">And What we do?</h1>
                <div className="bg-[#00afcb] h-2 w-28 self-center mt-5" />
                <div className="flex flex-col md:flex-row">
                    <div className="mt-10 flex flex-col  md:items-center md:justify-center ">
                        <div className="m-auto bg-[#00afcb] p-10 md:p-14 rounded-full flex justify-center items-center ">
                            <FaRegLightbulb className="w-12 h-12 text-white md:w-20 md:h-20" />
                        </div>
                        <h1 className="font-poppins text-center mt-4 md:w-[25rem] md:mt-5">
                            We conduct club conducted sessions called club serivces every week.
                        </h1>
                    </div>
                    <div className="flex flex-col  md:items-center md:justify-center mt-10">
                        <div className="m-auto bg-[#f99488] p-10 md:p-14 rounded-full flex justify-center items-center">
                            <SlTrophy className="w-12 h-12 text-white md:w-20 md:h-20" />
                        </div>

                        <h1 className="font-poppins text-center mt-4 md:w-[25rem] md:mt-5">
                            TechFusion is our main event that we conduct every year
                        </h1>
                    </div>
                    <div className="flex flex-col  md:items-center md:justify-center mt-10">
                        <div className="m-auto bg-[#164472] p-10 md:p-14 rounded-full flex justify-center items-center">
                            {/* <GrWorkshop className="w-12 h-12 text-white md:w-20 md:h-20" /> */}
                            <img src={workshop} className="w-14 h-14 md:w-24 md:h-24"/>
                        </div>

                        <h1 className="font-poppins text-center mt-4 md:w-[25rem] md:mt-5">
                            We conduct various workshops on software development,computer hardware, etc.
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 flex flex-col -translate-y-28 md:-translate-y-1 ">
                <h1 className="text-xl font-poppins font-bold text-center mt-5 md:text-4xl">Meet our guides</h1>
                <div className="bg-[#00afcb] h-2 w-28 self-center mt-5" />
                <div className="mx-6 mt-10 flex flex-col justify-center items-center pt-10 md:flex-row">
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/sait-website.appspot.com/o/Guides%2FMBN2BW.jpg?alt=media&token=67172d5f-b08d-4443-a2f1-464941dfd4e6" className="rounded-2xl h-60 w-60 md:w-80 md:h-80" />
                        <h1 className="font-poppins text-xl mt-5 font-bold">Mr Manish Narnaware</h1>
                        <h1 className="font-poppins mt-1">Co-staff adviser</h1>
                    </div>
                    <div className="mt-10 md:m-0 md:ml-20">
                        <img src="https://firebasestorage.googleapis.com/v0/b/sait-website.appspot.com/o/Guides%2FAU2BW.jpg?alt=media&token=ed10bbbc-5cdb-4e71-ad70-d51d999678db" className="rounded-2xl h-60 w-60 md:w-80 md:h-80" />
                        <h1 className="font-poppins text-xl mt-5 font-bold">Dr Anant Umbarkar</h1>
                        <h1 className="font-poppins mt-1">Co-staff adviser</h1>
                    </div>
                    <div className="mt-10 md:m-0 md:ml-20">
                        <img src="https://firebasestorage.googleapis.com/v0/b/sait-website.appspot.com/o/Guides%2FMayur%20Rathi2%20BW.jpg?alt=media&token=2ea47318-8fd0-41cf-a6e1-6f398d343503" className="rounded-2xl h-60 w-60 md:w-80 md:h-80" />
                        <h1 className="font-poppins text-xl mt-5 font-bold">Mr Mayur rathi</h1>
                        <h1 className="font-poppins mt-1">Co-staff adviser</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;