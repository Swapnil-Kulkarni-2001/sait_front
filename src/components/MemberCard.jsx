import React from "react";
import img_prof from "../assets/blackAndWhiteProfile.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MemberCard = ({data}) => {

    return (
        <div className="group shadow-lg bg-[#f3fcff] w-[20rem] h-[18rem] rounded-xl flex-col">
            <img src={data.profile_url} className="w-40 h-40 mt-4 mx-auto rounded-full  transition duration-700 group-hover:-translate-y-24 group-hover:rounded-3xl"/>
            <h1 className="m-auto text-center text-xl font-semibold transition duration-700 group-hover:-translate-y-24">{data.name}</h1>
            <h1 className="text-center font-poppins transition duration-700 group-hover:-translate-y-24">{data.position}</h1>
            <div className="transition-all duration-700 group-hover:-translate-y-[5rem]">
                <h1 className="hidden text-center font-poppins text-sm mb-6 transition-all duration-700 group-hover:block">
                    {data.message}
                </h1>

                <div className="flex justify-center transition duration-700 mt-3">
                    <div onClick={()=>{parent.open(`mailto: ${data.email}`)}} className="bg-[#00afcb] h-8 w-8 flex justify-center items-center rounded-full mx-2">
                        <MdEmail className="text-2xl text-white" />
                    </div>
                    <div onClick={()=>{parent.open(data.linkedin_url)}} className="bg-[#00afcb] h-8 w-8 flex justify-center items-center rounded-full mx-2">
                        <FaLinkedinIn className="text-xl text-white" />
                    </div>
                    <div onClick={()=>{parent.open(data.github_url)}} className="bg-[#00afcb] h-8 w-8 flex justify-center items-center rounded-full mx-2">
                        <AiOutlineGithub className="text-2xl text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberCard;