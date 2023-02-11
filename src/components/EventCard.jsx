import React, { useState } from "react";
import {NavLink } from "react-router-dom";
const EventCard = ({data}) => {
    return (
        <div>
            <NavLink to={`/events/${data.name}`} state={{data : data}}>
                <div className="group relative flex flex-col w-80 h-60 md:w-[28rem] md:h-80 rounded-3xl">
                    <img className="w-full h-full rounded-3xl group-hover:blur-sm" src={data.poster} />
                    <div className="absolute bg-transparent w-full py-3 -bottom-5  duration-700 transition-all group-hover:-translate-y-32 md:group-hover:-translate-y-36">
                        <h1 className="text-3xl font-poppins font-bold text-transparent group-hover:text-white text-center ">{data.name}</h1>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default EventCard;