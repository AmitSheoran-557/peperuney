import Image from 'next/image'
import React from 'react'

const PeperuneyToons = () => {
    return (
        <div className='bg-[url(/assets/images/png/click-video-arcade.png)] bg-cover bg-center w-full flex justify-end flex-col items-end'>
            <div className='w-full xl:pe-[109px] lg:pe-24 md:pe-20 sm:pe-16 pe-12 flex justify-end xl:pt-[110px] lg:pt-24 md:pt-20 sm:pt-16 pt-12'>
                <div>
                    <div className="relative flex mx-auto justify-center">
                        <h2 className="font-luckiest xl:text-[80px] lg:text-6xl text-[52px] !leading-[100%] text-white text-center xl:max-w-[555px] max-w-lg shadow-1">$PEPERUNEY</h2>
                        <Image className='xl:!max-w-[250px] lg:max-w-56 md:max-w-48 sm:max-w-40 max-w-[147px] xl:top-16 lg:top-[50px] md:top-11 sm:top-10 top-9 absolute w-full' src="/assets/images/png/toon-title-tag.png" alt="toon-title-tag" width={195} height={105} />
                    </div>
                </div>
            </div>
            <Image className='xl:!max-w-[668px] lg:max-w-xl md:max-w-lg max-w-sm w-full pt-[186px]' src="/assets/images/png/peperuney-front-of-tv.png" alt="peperuney-front-of-tv" width={668} height={524} />
        </div>
    )
}

export default PeperuneyToons
