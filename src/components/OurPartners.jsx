import { OUR_PARTNERS_BTN_LIST } from "@/utils/helper"
import Image from "next/image"

const OurPartners = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-[113px] xl:pb-[311px] lg:pb-64 md:pb-48 sm:pb-28 pb-[66px] bg-[url(/assets/images/png/our-partners-bg.png)] bg-cover bg-center w-full">
            <div className="relative flex flex-col items-center">
                <h2 className="uppercase font-luckiest xl:text-[80px] lg:text-7xl text-[52px] !leading-[100%] max-sm:px-7 text-white text-center xl:max-w-[555px] max-w-lg shadow-1">OUR PARTNERS</h2>
                <div className="bg-[url(/assets/images/png/our-partners-text-green-bg.png)] lg:-translate-y-4 max-w-max bg-[length:100%_100%] bg-center">
                    <p className="shadow-2 font-luckiest uppercase text-white xl:text-[54px] lg:text-5xl md:text-4xl text-[32px] max-w-max xl:-rotate-6 -rotate-3 px-9 md:py-7 py-5">we work with</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center max-xl:px-4  xl:mt-[75px] lg:mt-16 md:mt-14 sm:mt-12 mt-7 xl:gap-[60px] lg:gap-12 md:gap-10 sm:gap-8 gap-6">
                {OUR_PARTNERS_BTN_LIST.map((item, i) => (
                    <Image key={i} className="xl:max-w-[360px] lg:max-w-xs sm:max-w-[270px] max-w-[240px] w-full" src={item.image} alt={item.alt} width={360} height={140} />
                ))}
            </div>
        </div>
    )
}

export default OurPartners
