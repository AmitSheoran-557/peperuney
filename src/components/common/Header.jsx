import { HEADER_SOCIAL_LINKS } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center lg:pt-[30px] pt-5'>
            <div className="max-w-[1300px] w-full mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image className='lg:max-w-[262px] transition-transform transform hover:scale-x-105 animate-move-scale md:max-w-48 sm:max-w-40 max-w-32 w-full' src="/assets/images/png/buy-pepruney-btn.png" alt="buy-button" width={262} height={75} />
                    </Link>
                    <div className="flex xl:gap-10 lg:gap-9 md:gap-7 sm:gap-5 gap-3 items-center">
                        <Image className='lg:max-w-[69px] md:max-w-16 sm:max-w-12 max-w-10 w-full cursor-pointer' src="/assets/images/png/hero-flag-img.png" alt="flag-img" width={69} height={31} />
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
