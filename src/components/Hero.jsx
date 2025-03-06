import Image from 'next/image'
import Header from './common/Header'
import { HERO_SCROLL_CONTENT } from '@/utils/helper'

const Hero = () => {
    return (
        <div className='flex flex-col items-center w-full overflow-hidden relative bg-[url(/assets/images/png/hero-bg.png)] bg-cover bg-no-repeat bg-center'>
            <div className="max-w-[1332px] px-4 w-full mx-auto">
                <Header />
                <Image className='!max-w-[777px] xl:pt-[63px] xl:pb-[54px] max-xl:py-11 max-lg:py-8 max-md:py-5 mx-auto w-full' src="/assets/images/png/peperuney-img.png" alt="buy-button" width={777} height={283} />
                <Image className='md:!max-w-[311px] max-w-64 z-10 relative lg:pb-7 md:pb-6 bikeImage pb-5 mx-auto w-full' src="/assets/images/png/dilivery-img.png" alt="delivery-boy-img" width={311} height={316} />
            </div>
            <div className='relative w-full h-[100px] bg-red mx-auto flex justify-center items-center'>
                <Image className='!max-w-[1920px] absolute pointer-events-none bottom-[100px] mx-auto w-full' src="/assets/images/png/hero-pizza-img.png" alt="pizza-img" width={1920} height={244} />
                <div className="bottom-7 absolute z-20 scrolling-content">
                    {HERO_SCROLL_CONTENT.map((item, index) => (
                        <Image key={index} className='!max-w-[1920px] max-md:min-w-[1440px] z-20 pointer-events-none mx-auto w-full' src={item.content} alt="pizza-img" width={1920} height={40} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero
