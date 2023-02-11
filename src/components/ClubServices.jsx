import axios from "../axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CSCard from "./CSCard";
import CSCardT from "./CSCardT";

const ClubServices = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const resp = await axios.get("/clubservices");
        for (let i = 0; i < resp.data.length; i++) {
            console.log(resp.data[i].title);
        }
        setData(resp.data)
    }

    useEffect(() => {
        getData();
    }, []);

    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[pathname]);

    return (
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
                <h1 className="text-2xl md:text-5xl font-poppins font-bold text-black">Club service</h1>
                <h1 className="font-poppins text-left mt-5 text-[#7e7b90]">
                A Club service is a meeting or seminar focused on discussing technical topics, such as software development, engineering, and IT. These sessions are designed to provide participants with an in-depth understanding of specific technical concepts and how they can be applied to solve real-world problems. The format of a technical session may vary, but typically includes a presentation or lecture by club members and experts in the field, followed by a Q&A session where participants can ask questions and engage in discussion.
                </h1>

            </div>


            <div className="grid grid-cols-1 gap-y-24 gap-x-5 justify-center items-center mt-14 mb-20 sm:grid-cols-2 md:grid-cols-3 md:gap-x-40 self-center">
                {
                    data.map((item, index) => <CSCardT data={item} key={index} />)
                }
            </div>
        </div>
    );
}

export default ClubServices;