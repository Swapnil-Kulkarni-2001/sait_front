import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-gallery-carousel";
import 'react-gallery-carousel/dist/index.css';

const SEvent = () => {

    let location = useLocation();

    // console.log("about", location);
    // const images = [9, 8, 7, 6, 5].map((number) => ({
    //     src: `https://placedog.net/${number}00/${number}00?id=${number}`
    // }));

    return (
        <div className="flex flex-col px-2 py-20 md:px-10">
            {
                location.state === null ?
                    <div className="flex flex-col h-[30rem] ">
                        <h1 className="text-center text-9xl font-poppins ">404</h1>
                        <h1 className="text-center text-xl font-poppins ">There's nothing here.</h1>
                    </div>
                    :
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-red-300 h-72 md:w-[70%] md:h-[30rem]">
                            {/* <img className="md:h-[30rem] w-full" src="https://firebasestorage.googleapis.com/v0/b/sait-website.appspot.com/o/mega_events%2Ftechfusion_2022%2Ftechfusion_2022.jpg?alt=media&token=9319c98a-3d70-47e9-9424-b93ec893590d" />
                     */}
                            <Carousel images={location.state.data.memories}

                                hasIndexBoard={false}
                                hasDotButtons="bottom"
                                hasCaptionsAtMax='top'
                                hasDotButtonsAtMax='bottom'
                                hasThumbnails={false}

                                thumbnailWidth={'15%'}
                                thumbnailHeight={'15%'}
                                shouldMaximizeOnClick={true}
                                shouldMinimizeOnClick={true}
                                objectFit="contain"
                                objectFitAtMax="contain"
                                canAutoPlay={true}
                                autoPlayInterval={3000}
                                isAutoPlaying={true}
                            />
                        </div>

                        <div className="mt-10 md:ml-10">
                            <h1 className="text-3xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500">{location.state.data.name}</h1>
                            <h1 className="mt-10 text-xl md:text-2xl font-poppins text-black">Objective</h1>
                            <h1 className="mt-5 font-poppin text-[#7e7b90]">{location.state.data.objective}</h1>
                            <h1 className="text-xl md:text-2xl font-poppins text-black mt-5">Outcome</h1>
                            <h1 className="mt-5 font-poppin text-[#7e7b90]">{location.state.data.outcome}</h1>
                        </div>
                    </div>
            }
        </div>
    );
}

export default SEvent;