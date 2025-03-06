import { HERO_SCROLL_CONTENT } from "@/utils/helper"
import Image from "next/image"

const HowToBuy = () => {
    return (
        <>
            <div className="w-full relative">
                <div className="bg-dark-green pt-20 scroll-bar-none overflow-x-hidden flex flex-col justify-center mx-auto items-center xl:pb-48 lg:pb-40 md:pb-32 sm:pb-24 pb-12 relative">
                    <div className="top-8 absolute z-20 scrolling-content">
                        {HERO_SCROLL_CONTENT.map((item, index) => (
                            <Image key={index} className='!max-w-[1920px] max-lg:min-w-[1440px] z-20 pointer-events-none mx-auto w-full' src={item.content} alt="pizza-img" width={1920} height={40} />
                        ))}
                    </div>
                    <Image className='absolute -bottom-1 z-20 pointer-events-none mx-auto w-full max-h-[195px]' src="/assets/images/png/how-to-buy-cloud.png" alt="cloud-img" width={1920} height={195} />
                </div>
                <div className="xl:pt-20 lg:pt-16 md:pt-12 sm:pt-9 pt-5 z-20 -mt-1 relative flex flex-col justify-center mx-auto items-center">
                    <Image className='xl:!max-w-[443px] lg:max-w-sm md:max-w-[300px] max-w-[240px] mx-auto w-full lg:mb-6 mb-5' src="/assets/images/png/how-to-buy-title.png" alt="how-to-buy-title" width={443} height={155} />
                    <div className="bg-[url(/assets/images/png/open-pizza-box.png)] max-w-[1920px] bg-cover bg-no-repeat w-full mx-auto bg-center">
                        <div className="bg-brown-100 py-12">
                            <div className="container max-w-[1075px] lg:pt-16 md:pt-24 sm:pt-20 pt-12 mx-auto px-4">
                                <div className="flex flex-wrap justify-center xl:items-center items-start xl:pt-0 lg:pt-8 xl:gap-8 gap-16">
                                    <div className="w-full max-w-[322px] xl:pt-[125px]">
                                        <div className="bg-white border-4 pt-[50px] px-5 pb-5 relative w-full max-w-[322px]">
                                            <div className="-rotate-6 mx-auto justify-center items-center max-w-max font-luckiest absolute -top-9 left-28 flex bg-black text-white text-[54px] px-3">
                                                01
                                            </div>
                                            <h2 className="text-2xl font-bold mb-4">GET YOUR WALLET READY</h2>
                                            <p className="text-gray-700">
                                                Set up Phantom Wallet and connect it to Solana. Make sure Solana's locked and loaded as the active network.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-[322px] flex flex-col justify-center items-center">
                                        <div className="bg-white border-4 pt-[50px] px-5 pb-5 relative w-full max-w-[322px]">
                                            <div className="-rotate-6 mx-auto justify-center items-center max-w-max font-luckiest absolute -top-9 left-28 flex bg-black text-white text-[54px] px-3">
                                                02
                                            </div>
                                            <h2 className="text-2xl font-bold mb-4">FUND YOUR WALLET</h2>
                                            <p className="text-gray-700">
                                                Load up on SOL from Coinbase, Binance, or OKX. Double-check your wallet address—no room for slip-ups.
                                            </p>
                                        </div>
                                        <div className="mt-4 p-2 border-4 relative flex justify-between lg:whitespace-nowrap items-center bg-white max-w-[322px] w-full lg:!min-w-[338px] text-sm">
                                            <p className="text-black">CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0</p>
                                            <Image className='!max-w-[40px] w-full' src="/assets/images/png/text-copy-logo.png" alt="copy-icon" width={32} height={32} />
                                        </div>
                                    </div>
                                    <div className="w-full max-w-[322px] xl:pt-[125px]">
                                        <div className="bg-white border-4 pt-[50px] px-5 pb-5 relative w-full max-w-[322px]">
                                            <div className="-rotate-6 mx-auto justify-center items-center max-w-max font-luckiest absolute -top-9 left-28 flex bg-black text-white text-[54px] px-3">
                                                03
                                            </div>
                                            <h2 className="text-2xl font-bold mb-4">GRAB THAT $PEPERUNEY</h2>
                                            <p className="text-gray-700">
                                                Hit up a Solana DEX like Meteora or Jupiter, swap your SOL for $PepeRuney, and lock it in. Hell yeah!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image className='relative z-20 pointer-events-none mx-auto w-full max-h-[495px]' src="/assets/images/png/half-pizza-animation.png" alt="pizza-img" width={1220} height={195} />
                    </div>
                </div>
                <div className="bg-[url(/assets/images/png/pizza-box-pattern.png)] bg-cover bg-no-repeat w-full mx-auto bg-center">
                    <Image className='lg:max-w-[403px] md:max-w-[350px] sm:max-w-xs max-w-[260px] lg:pt-6 lg:pb-4 max-lg:py-3 z-20 pointer-events-none mx-auto w-full' src="/assets/images/png/peperuney-logo.png" alt="peperuney-logo-img" width={403} height={95} />
                </div>
            </div>

        </>
    )
}

export default HowToBuy
