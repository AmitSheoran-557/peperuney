import Image from "next/image"
import CustomPeperuneyAnimation from "./common/CustomPeperuneyAnimation"

const HowToBuy = () => {
    return (
        <>
            <div className="w-full relative">
                <div className="bg-dark-green scroll-bar-none flex flex-col justify-center mx-auto items-center xl:pb-48 lg:pb-40 md:pb-32 sm:pb-24 pb-12 relative">
                    <CustomPeperuneyAnimation customClass="sm:h-[100px] max-sm:h-[76px] border-none" />
                    <Image className='absolute -bottom-1 z-20 pointer-events-none mx-auto w-full max-h-[195px]' src="/assets/images/webp/how-to-buy-cloud.webp" alt="cloud-img" width={1920} height={195} />
                </div>
                <div className="xl:pt-20 lg:pt-16 md:pt-12 sm:pt-9 pt-5 z-20 -mt-1 relative flex flex-col justify-center mx-auto items-center">
                    <Image className='xl:!max-w-[443px] lg:max-w-sm md:max-w-[300px] max-w-[240px] mx-auto w-full lg:mb-6 mb-5 pointer-events-none' src="/assets/images/webp/how-to-buy-title.webp" alt="how-to-buy-title" width={443} height={155} />
                    <div className="bg-[url(/assets/images/webp/open-pizza-box.webp)] xl:bg-[length:100%_100%] bg-cover max-w-[1920px] bg-no-repeat w-full mx-auto bg-center">
                        <div className="bg-brown-100 pt-12 lg:pb-12 md:pb-10 pb-4">
                            <div className="container max-w-[1075px] lg:pt-16 md:pt-24 sm:pt-20 pt-12 mx-auto px-4">
                                <div className="flex flex-wrap justify-center xl:items-center items-start xl:pt-0 lg:pt-8 xl:gap-8 gap-16">
                                    <div className="w-full max-w-[322px] xl:pt-[125px]">
                                        <div className="bg-white border-4 md:pt-[56px] sm:pt-11 pt-10 lg:min-h-[253px] px-5 pb-5 relative w-full max-w-[322px]">
                                            <div className="-rotate-6 mx-auto justify-center items-center max-w-max font-luckiest absolute lg:-top-11 md:-top-9 -top-8 lg:left-28 left-32 flex bg-black text-white lg:text-[54px] text-4xl lg:p-3 p-2">
                                                01
                                            </div>
                                            <h2 className="lg:text-[40px] text-center text-3xl font-bold font-luckiest mb-4">GET YOUR WALLET READY</h2>
                                            <p className="text-gray-700">
                                                Set up Phantom Wallet and connect it to Solana. Make sure Solana's locked and loaded as the active network.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-[322px] flex flex-col justify-center items-center">
                                        <div className="bg-white border-4 md:pt-[56px] sm:pt-11 pt-10 md:min-h-[253px] xl:min-h-0 px-5 pb-5 relative w-full max-w-[322px]">
                                            <div className="-rotate-6 mx-auto justify-center items-center max-w-max font-luckiest absolute lg:-top-11 md:-top-9 -top-8 lg:left-28 left-32 flex bg-black text-white lg:text-[54px] text-4xl lg:p-3 p-2">
                                                02
                                            </div>
                                            <h2 className="lg:text-[40px] text-center text-3xl font-bold font-luckiest mb-4">FUND YOUR WALLET</h2>
                                            <p className="text-gray-700">
                                                Load up on SOL from Coinbase, Binance, or OKX. Double-check your wallet address—no room for slip-ups.
                                            </p>
                                        </div>
                                        <div className="mt-4 p-2 border-4 max-xl:hidden relative flex justify-between lg:whitespace-nowrap items-center bg-white max-w-[322px] w-full lg:!min-w-[338px] text-sm">
                                            <p className="text-black lg:text-lg ">CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0</p>
                                            <Image className='!max-w-[40px] w-full cursor-pointer hover-animation-2' src="/assets/images/webp/text-copy-logo.webp" alt="copy-icon" width={32} height={32} />
                                        </div>
                                    </div>
                                    <div className="w-full max-w-[322px] xl:pt-[125px]">
                                        <div className="bg-white border-4 md:pt-[56px] sm:pt-11 pt-10 lg:min-h-[253px] px-5 pb-5 relative w-full max-w-[322px]">
                                            <div className="-rotate-6 mx-auto justify-center items-center max-w-max font-luckiest absolute lg:-top-11 md:-top-9 -top-8 lg:left-28 left-32 flex bg-black text-white lg:text-[54px] text-4xl lg:p-3 p-2">
                                                03
                                            </div>
                                            <h2 className="lg:text-[40px] text-center text-3xl font-bold font-luckiest mb-4">GRAB THAT $PEPERUNEY</h2>
                                            <p className="text-gray-700">
                                                Hit up a Solana DEX like Meteora or Jupiter, swap your SOL for $PepeRuney, and lock it in. Hell yeah!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image className='relative z-20 pointer-events-none mx-auto w-full max-h-[495px]' src="/assets/images/webp/half-pizza-animation.webp" alt="pizza-img" width={1220} height={195} />
                    </div>
                </div>
                <div className="bg-[url(/assets/images/webp/pizza-box-pattern.webp)] bg-cover bg-no-repeat w-full mx-auto bg-center">
                    <Image className='lg:max-w-[403px] md:max-w-[350px] sm:max-w-xs max-w-[260px] lg:pt-6 lg:pb-4 max-lg:py-3 z-20 pointer-events-none mx-auto w-full' src="/assets/images/webp/peperuney-logo.webp" alt="peperuney-logo-img" width={403} height={95} />
                </div>
            </div>

        </>
    )
}

export default HowToBuy
