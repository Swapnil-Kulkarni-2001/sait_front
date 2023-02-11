import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EventCard from "./EventCard";

const Events = ()=>{

    const[data,setData] = useState([]);

    const getData = async()=>{
        const resp = await axios.get("/events");
        for (let i = 0; i < resp.data.length; i++) {
            console.log(resp.data[i].name);
        }
        setData(resp.data);
    }

    useEffect(()=>{
        getData();
    },[]);

    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[pathname]);

    return(
        <div className="flex flex-col">
            {/* <div className="mt-10 mx-6 sm:mt-16 sm:mx-36">
                <h1 className="text-2xl font-semibold font-poppins text-center sm:text-5xl sm:text-left">About Us</h1>
                <h1 className="mt-4 font-poppins sm:text-left">
                    An association for students of the IT Department<br />
                    Established in 2003<br />
                    Conduct various technical activities and club services for students<br />
                    Activities include programming, communication skills, development, quiz, aptitude test.<br />
                </h1>
            </div> */}
            <div className="px-5 mt-10 md:px-36 md:mt-16">
                <h1 className="text-2xl md:text-5xl font-poppins font-bold text-black">TechFusion</h1>
                <h1 className="font-poppins text-left text-[#7e7b90] mt-5">Annual state-level mega event of SAIT which is dynamic and changing every year based on current trends and necessities under which multiple events are conducted that focus on showcasing, improving and learning new skills in technical and non-technical segments.</h1> 
                
            </div>

            {/* <div className="flex flex-col mt-16 md:mx-36">
                <h1 className="text-xl font-poppins font-bold text-center md:text-5xl">Events</h1>
                <div className="bg-[#00afcb] h-2 w-14 self-center mt-5 md:w-20" />
            </div> */}
            <div>
                
            </div>
            <div className="grid grid-cols-1 gap-y-16 md:gap-y-24 gap-x-5 justify-center items-center mt-14 mb-20 md:grid-cols-2 md:gap-x-24 self-center md:self-start md:px-36">
                {
                    data.map((item,index)=><EventCard data={item} key={index}/>)
                }                
            </div>
        </div>
    );
}

export default Events;