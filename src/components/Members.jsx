import React, { useState } from "react";
import MemberCard from "./MemberCard";
import axios from "../axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Members = () => {

    const [team, setTeam] = useState("main");
    const [data, setData] = useState([]);

    const getData = async ()=>{

        if(team==="main")
        {
            const resp = await axios.get("/members/main_team");
            //console.log(resp.data)
            for(let i = 0; i<resp.data.length; i++)
            {
                console.log(resp.data[i].name);
            }
            setData(resp.data);
        }

        if(team==="assistant")
        {
            const resp = await axios.get("/members/assistant_team");
            //console.log(resp.data)
            for(let i = 0; i<resp.data.length; i++)
            {
                console.log(resp.data[i].name);
            }
            setData(resp.data);
        }

        if(team==="mentor")
        {
            const resp = await axios.get("/members/mentor");
            //console.log(resp.data)
            for(let i = 0; i<resp.data.length; i++)
            {
                console.log(resp.data[i].name);
            }
            setData(resp.data);
        }
    }

    const {pathname} = useLocation();

    useEffect(()=>{
        getData();
    },[team]);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[pathname]);

    return (
        <div className="flex flex-col">
            <div className="mt-10 mx-6 sm:mt-16 sm:mx-36">
                <h1 className="text-2xl font-semibold font-poppins text-center sm:text-5xl sm:text-left">About Us</h1>
                <h1 className="mt-4 font-poppins text-center md:text-left md:text-lg text-[#7e7b90]">
                    An association for students of the IT Department established in 2003
                    Conduct various technical activities and club services for students
                    Activities include programming, communication skills, development, quiz, aptitude test.
                    To introduce new technologies and ideas with the help of club conducted sessions called club services
                    and also improves communication skill and management skill of club members through seminars and various workshops.
                </h1>
            </div>
            <div className="flex flex-col mt-16">
                <h1 className="text-xl font-poppins font-bold text-center sm:text-4xl">Meet our Team</h1>
                <div className="bg-[#00afcb] h-2 w-14 self-center mt-5" />
            </div>

            <div className="flex rounded-2xl mx-6 mt-10 justify-between bg-[#f3fcff] md:justify-start md:mx-36 md:bg-white">
                <div onClick={() => setTeam("main")} className={`rounded-tl-2xl rounded-bl-2xl cursor-pointer ${team == "main" ? "bg-[#00afcb]" : "bg-[#f3fcff]"}`}>
                    <h1 className={`p-2 font-poppins text-sm text-center md:text-lg ${team == "main" ? "text-white" : "text-black"}`}>Main board</h1>
                </div>
                <div onClick={() => setTeam("mentor")} className={`cursor-pointer ${team == "mentor" ? "bg-[#00afcb]" : "bg-[#f3fcff]"}`}>
                    <h1 className={`p-2 font-poppins text-sm text-center md:text-lg ${team == "mentor" ? "text-white" : "text-black"}`}>Mentor board</h1>
                </div>
                <div onClick={() => setTeam("assistant")} className={`rounded-tr-2xl rounded-br-2xl cursor-pointer ${team == "assistant" ? "bg-[#00afcb]" : "bg-[#f3fcff]"}`}>
                    <h1 className={`p-2 font-poppins text-sm text-center md:text-lg ${team == "assistant" ? "text-white" : "text-black"}`}>Assistant board</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-24 md:gap-y-20 gap-x-5 justify-center items-center mt-24 mb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 self-center">

                {
                    data.map((item,index)=><MemberCard data={item} key={index} />)
                }

            </div>
        </div>
    );
}

export default Members;