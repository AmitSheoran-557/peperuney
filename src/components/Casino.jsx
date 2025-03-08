import Image from "next/image"
import Link from "next/link"

const Casino = () => {
    return (
        <div className="flex flex-col justify-center lg:items-end items-center relative w-full bg-[url(/assets/images/png/casino-background.png)] bg-cover bg-no-repeat bg-left">
            <Image className='xl:!max-w-[388px] lg:max-w-[340px] md:max-w-xs max-w-[279px] xl:max-h-[854px] lg:h-[800px] md:h-[700px] h-[618px] absolute pointer-events-none w-full left-0 bottom-10' src="/assets/images/png/peperuney-and-arcade.png" alt="casino-bg" width={388} height={854} />
            <div className="lg:pe-[70px] xl:pt-[100px] lg:pt-20 pt-16 sm:pb-[127px] pb-[500px] max-lg:px-4 flex justify-end">
                <div className=" mx-auto flex flex-col items-center justify-center">
                    <h2 className="font-luckiest xl:text-[80px] lg:text-6xl text-[52px] !leading-[100%] text-white text-center xl:max-w-[555px] max-w-lg shadow-1">Click-To-Earn and arcade </h2>
                    <div className="sm:bg-[url(/assets/images/png/casino-text-white-bg.png)] lg:mb-[40px] md:mb-8 sm:mb-7 mb-[23px] sm:mt-0 mt-10 relative max-sm:bg-[url(/assets/images/png/casino-text-sm-white-bg.png)] bg-[length:100%_100%] bg-no-repeat bg-center w-full h-full flex justify-center items-center">
                        <Image className='!max-w-[195px] sm:hidden max-sm:block -top-10 absolute w-full' src="/assets/images/png/pizza-guy-tag.png" alt="pizza-guy-tag" width={195} height={77} />
                        <p className="max-w-[682px] w-full text-black text-start lg:text-2xl md:text-xl sm:text-lg text-base !leading-[180%] lg:px-[30px] md:px-[25px] px-5 lg:pb-[30px] md:pb-[25px] pb-5 lg:pt-[120px] sm:pt-20 pt-10">HEY YOU! Yeah, YOU! So you made it this far… Hell yeah I’m impressed! Means you’re serious about pizza, vibes, and big-time wins. Catch me at the slots or the poker table, always *ALL-IN* for that next big score. It’s the thrill, baby—the gamble, the grind—it keeps me fired up to build the ULTIMATE PIZZA EMPIRE! Wanna roll with the best? Smash that button, start stackin’ up, and show me what you got. FEELS GREAT MAN!</p>
                    </div>
                    <div className="w-full flex max-md:flex-col items-center justify-between lg:px-[85px] lg:gap-[30px] sm:gap-5 gap-2">
                        <Link href="/" className='bg-[url(/assets/images/webp/buy-btn-bg.webp)] gap-4 relative z-10 bg-[length:100%_100%] lg:max-w-[241px] h-[74px] flex justify-center items-center transition-transform transform hover-animation animate__animated max-w-[335px] w-full'>
                            <Image className='max-w-8 w-full min-w-8' src="/assets/images/webp/telegram-icon-2.webp" alt="telegram-icon-img" width={32} height={32} />
                            <h3 className='font-luckiest font-normal lg:text-[28px] text-2xl text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-4'>Play now</h3>
                        </Link>
                        <Link href="/" className='bg-[url(/assets/images/png/btn-green-bg.png)] gap-4 relative z-10 bg-[length:100%_100%] lg:max-w-[241px] h-[74px] flex justify-center items-center transition-transform transform hover-animation animate__animated max-w-[335px] w-full'>
                            <Image className='max-w-8 w-full min-w-8' src="/assets/images/webp/telegram-icon-2.webp" alt="telegram-icon-img" width={32} height={32} />
                            <h3 className='font-luckiest font-normal lg:text-[28px] text-2xl text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-4'>mini app</h3>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-light-brown h-10 border-y-4 w-full"></div>
        </div>
    )
}

export default Casino
