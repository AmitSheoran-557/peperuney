import { BAKE_TO_EARN_BTN_LIST, HERO_SCROLL_CONTENT } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'

const Pizzanomics = () => {
    return (
        <div className='flex bg-red overflow-hidden'>
            <div className=" max-w-[1920px] w-full mx-auto relative flex flex-col items-center">
                <Image className='!max-w-[1920px] z-10 pointer-events-none max-sm:min-h-[110px] mx-auto w-full' src="/assets/images/png/pizzanomics-bg-img.png" alt="pizzanomics-bg-img" width={1920} height={346} />
                <div className="max-w-[1332px] px-4 w-full mx-auto max-lg:flex flex-col lg:items-center">
                    <Image className='xl:!max-w-[846px] lg:max-w-3xl md:max-w-xl sm:max-w-lg max-w-xs z-10 absolute xl:top-14 lg:top-6 md:top-5 top-2 max-sm:ms-3 mx-auto w-full max-h-[99px]' src="/assets/images/png/pizzanomics-img.png" alt="pizzanomics-img" width={846} height={99} />
                    <div className="flex flex-wrap justify-start max-w-[1920px] mx-auto">
                        <div className="lg:w-5/12 w-full">
                            <Image className='xl:!max-w-[485px] lg:max-w-sm max-w-xs max-sm:px-10 xl:pt-0 lg:pt-24 relative z-10 max-sm:pt-20 w-full' src="/assets/images/png/peperuney-text-img-2.png" alt="pizzanomics-text-img" width={485} height={257} />
                        </div>
                        <div className="lg:w-7/12 w-full">
                            <Image className='xl:!max-w-[812px] lg:max-w-2xl md:max-w-md sm:max-w-md max-w-[300px] absolute xl:top-40 lg:top-32 md:top-28 top-12 -right-4 w-full' src="/assets/images/png/token-supply-img.png" alt="token-pizza-img" width={812} height={530} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center max-h-[319px] !max-w-[1920px] mx-auto items-center">
                    <div className="lg:w-5/12 w-full">
                        <Image className='xl:!max-w-[617px] md:max-w-sm sm:max-w-md max-w-xs absolute left-0 lg:pt-9 xl:min-w-[617px] min-w-sm max-sm:-translate-y-3 w-full' src="/assets/images/png/lp-burned-img.png" alt="lp-burned-text-img" width={617} height={111} />
                    </div>
                    <div className="lg:w-7/12 w-full">
                        <Image className='xl:!max-w-[942px] lg:max-w-2xl max-w-xl absolute right-0 z-40 xl:min-w-[942px] xl:top-[29%] lg:top-[30%] md:top-[19%] top-[21%] w-full' src="/assets/images/png/zero-tax-img.png" alt="token-pizza-img" width={942} height={306} />
                    </div>
                </div>
                <div className="min-h-[1000px] mt-20 max-w-[1920px] mx-auto bg-[url(/assets/images/png/bricks-bg-img.png)] bg-cover w-full bg-no-repeat bg-center">
                    <div className="flex flex-wrap justify-center lg:pt-40 pt-32 relative">
                        <div className="lg:w-7/12 w-full flex flex-col items-center">
                            <Image className='xl:!max-w-[500px] lg:max-w-sm md:max-w-sm max-w-xs w-full lg:mb-6 mb-5' src="/assets/images/png/closed-oven.png" alt="closed-oven-img" width={500} height={80} />
                            <Image className='xl:!max-w-[500px] lg:max-w-md md:max-w-sm max-w-xs w-full relative z-20 lg:mb-4 mb-3' src="/assets/images/png/bake-to-earn.png" alt="bake-to-earn-img" width={500} height={370} />
                            <Link href="#">
                                <Image className='!max-w-[313px] transition-transform transform hover:scale-x-105 animate-move-scale w-full relative z-20' src="/assets/images/png/earn-now-btn.png" alt="earn-now-img" width={313} height={97} />
                            </Link>
                        </div>
                        <div className="lg:w-5/12 w-full flex justify-center">
                            <Image className='xl:!max-w-[656px] lg:max-w-xl md:max-w-lg sm:max-w-md max-w-xs w-full' src="/assets/images/png/meme-adoption-img.png" alt="meme-adoption-img" width={656} height={97} />
                        </div>
                        <Image className='!max-w-[1920px] min-w-[1440px] absolute pointer-events-none lg:-bottom-52 -bottom-64 mx-auto w-full' src="/assets/images/png/table-img.png" alt="table-img" width={1920} height={534} />
                    </div>
                    <div className="flex flex-wrap justify-center max-w-[1200px] bg-red-gradient relative z-10 mx-auto py-5 xl:gap-[60px] lg:gap-10 gap-7">
                        {BAKE_TO_EARN_BTN_LIST.map((item, index) => (
                            <Link key={index} href="#" className="flex flex-col items-center">
                                <Image  className='xl:!max-w-[360px] transition-transform transform hover:scale-x-105 animate-move-scale lg:max-w-64 max-w-[236px] w-full' src={item.image} alt="pizza-img" width={360} height={40} />
                            </Link>

                        ))}
                    </div>
                    <div className='relative w-full h-[100px] max-w-[1920px] overflow-hidden bg-red mx-auto flex justify-center items-center'>
                        <div className="bottom-7 absolute z-20 scrolling-content">
                            {HERO_SCROLL_CONTENT.map((item, index) => (
                                <Image key={index} className='!max-w-[1920px] max-md:min-w-[1440px] z-20 pointer-events-none mx-auto w-full' src={item.content} alt="pizza-img" width={1920} height={40} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizzanomics
