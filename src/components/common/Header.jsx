"use client"
import { HEADER_FLAGS_DATA_LIST, HEADER_SOCIAL_LINKS } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState('/assets/images/webp/header-flag-img.webp');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const selectFlag = (flagSrc) => {
        setSelectedFlag(flagSrc);
        setIsOpen(false);
    };
    return (
        <div className='flex flex-col justify-center items-center lg:pt-[30px] pt-5'>
            <div className="max-w-[1300px] w-full mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="/" className='bg-[url(/assets/images/webp/buy-btn-bg.webp)] bg-[length:100%_100%] lg:max-w-[262px] flex justify-center transition-transform transform hover:scale-x-105 animate-move-scale md:max-w-48 sm:max-w-40 max-w-[132px] w-full'>
                        <h3 className='font-luckiest font-normal lg:text-[28px] md:text-xl text-sm text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-5'>BUY $PEPERUNEY</h3>
                    </Link>
                    <div className="flex xl:gap-10 lg:gap-9 md:gap-7 sm:gap-5 gap-3 items-center">
                        <div className="relative">
                            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                                <img className="lg:max-w-[41px] lg:min-w-[41px] md:min-w-9 min-w-8 lg:h-[31px] h-6 md:max-w-9 max-w-8 w-full" src={selectedFlag} alt="selected-flag" width={41} height={31} />
                                <span className="lg:ml-2 ml-1 lg:text-xl text-sm transition-all ease-linear duration-300">{isOpen ? '▲' : '▼'}</span>
                            </div>

                            {isOpen && (
                                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 shadow-md rounded-lg z-10">
                                    <ul className="space-y-2 p-2">
                                        {HEADER_FLAGS_DATA_LIST.map((flag, index) => (
                                            <li key={index} className="cursor-pointer p-2 hover:bg-gray-100" onClick={() => selectFlag(flag.src)}>
                                                <img className="lg:max-w-[41px] md:max-w-9 max-w-8 w-full" src={flag.src} alt={flag.alt} width={41} height={31} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className='flex gap-2'>
                            {HEADER_SOCIAL_LINKS.map((item, index) => (
                                <Link key={index} href={item.link} target="_blank">
                                    <Image className='xl:!max-w-[77px] lg:max-w-16 hover:scale-115 transition-all ease-linear duration-300 md:max-w-12 sm:max-w-11 max-w-10 w-full' src={item.icon} alt="social-icon" width={77} height={67} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
