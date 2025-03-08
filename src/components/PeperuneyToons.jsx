"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const PeperuneyToons = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className='bg-[url(/assets/images/png/click-video-arcade.png)] bg-cover bg-center'>
            <div className="max-w-[1920px] mx-auto w-full flex justify-center flex-col relative items-center">
                <div className='w-full xl:pe-[109px] lg:pe-24 md:pe-20 sm:pe-16 pe-12 flex justify-end xl:pt-[110px] lg:pt-24 md:pt-20 sm:pt-16 pt-12'>
                    <div>
                        <div className="relative flex mx-auto justify-center">
                            <h2 className="font-luckiest xl:text-[80px] lg:text-6xl text-[52px] !leading-[100%] text-white text-center xl:max-w-[555px] max-w-lg shadow-1">$PEPERUNEY</h2>
                            <Image className='xl:!max-w-[250px] lg:max-w-56 md:max-w-48 sm:max-w-40 max-w-[147px] xl:top-16 lg:top-[50px] md:top-11 sm:top-10 top-9 absolute w-full' src="/assets/images/png/toon-title-tag.png" alt="toon-title-tag" width={195} height={105} />
                        </div>
                    </div>
                </div>

                <Image onClick={openPopup} className='xl:!max-w-[477px] lg:max-w-[420px] md:max-w-[370px] vdo-icon sm:max-w-xs max-w-[300px] xl:top-[360px] lg:top-80 md:top-72 sm:top-[244px] top-[240px] lg:-translate-x-14 md:-translate-x-12 -translate-x-10 mx-auto w-full absolute cursor-pointer' src="/assets/images/png/vdo-tap-img.png" alt="vdo-tap-img" width={477} height={524} />
                <div className="flex w-full justify-end">
                    <Image className='xl:!max-w-[668px] pointer-events-none lg:max-w-xl md:max-w-lg max-w-sm relative z-10 w-full pt-[186px]' src="/assets/images/png/peperuney-front-of-tv.png" alt="peperuney-front-of-tv" width={668} height={524} />
                </div>

                {isPopupOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                        <div className="relative bg-white mx-4 w-full max-w-[1024px] lg:p-4 md:p-3 p-2 rounded-md">
                            <button className="absolute lg:top-5 top-4 cursor-pointer lg:right-5 right-4 text-white w-10 rounded-sm bg-red-600 z-20 font-bold text-xl" onClick={closePopup}> X</button>
                            <video controls autoPlay className="w-full h-[auto] rounded-md" src="/assets/videos/cartoon-video.mp4"  >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PeperuneyToons;
