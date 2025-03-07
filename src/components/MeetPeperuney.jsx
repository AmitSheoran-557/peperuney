import Image from "next/image"
import Link from "next/link"

const MeetPeperuney = () => {
    return (
        <div className="flex flex-col w-full bg-[url(/assets/images/webp/meet-peperuney-bg.webp)] relative overflow-hidden bg-cover bg-no-repeat bg-center">
            <Image className='!max-w-[356px] absolute pointer-events-none top-56 image-move w-full' src="/assets/images/webp/meet-peperuney-cloud-img.webp" alt="pizza-img" width={356} height={173} />
            <div className='flex flex-col items-center xl:pt-[282px] lg:pt-64 pt-44 -mt-1 w-full h-full overflow-hidden relative '>
                <Image className='!max-w-[1920px] max-md:min-w-4xl absolute pointer-events-none top-0 mx-auto w-full' src="/assets/images/webp/melting-cheese.webp" alt="melting-cheese-img" width={1920} height={272} />
                <div className="max-w-[1332px] px-4 w-full mx-auto">
                    <div className="flex flex-wrap justify-center max-lg:flex-col-reverse items-center">
                        <div className="lg:w-5/12 w-full max-lg:flex justify-center">
                            <Image className='!max-w-[580px] xl:min-w-[580px] w-full pointer-events-none max-sm:-translate-y-16 relative z-10' src="/assets/images/gif/cloud-peperuney.gif" alt="pizza-delivery-img" width={580} height={530} />
                        </div>
                        <div className="lg:w-7/12 w-full flex flex-col lg:items-end items-center text-start">
                            <Image className='!max-w-[613px] w-full flex items-start mx-auto pointer-events-none' src="/assets/images/webp/meet-peperuney-img.webp" alt="peperuney-img" width={613} height={80} />
                            <div className="relative max-w-[715px] min-w-sm w-full sm:bg-[url(/assets/images/webp/white-board-bg.webp)] max-sm:min-w-[355px] max-sm:bg-[url(/assets/images/webp/sm-white-board-bg.webp)] bg-center bg-[length:100%_100%] bg-no-repeat bg-">
                                <p className="pt-32 lg:ps-16 sm:ps-14 ps-10 relative z-10 max-w-[660px] w-full !leading-[180%] lg:text-xl md:text-lg max-lg:pe-5 lg:pe-7 pb-4">The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’. Spot the red hat and polo? You know it’s pizza time, baby! Whether he’s hustlin’ for the next big score or chillin’ with the Boys Club, PepeRuney guarantees one thing: the vibes and the dough are always rollin’</p>
                                <div className="flex max-w-[624px] border-t-2 pt-5 xl:pb-13 md:pb-12 pb-10 mx-auto  sm:ms-14 ms-7 me-6 items-center justify-between">
                                    <h3 className="lg:text-2xl text-lg whitespace-nowrap">FEELS GREAT MAN!</h3>
                                    <Link href="/" className='bg-[url(/assets/images/webp/buy-btn-bg.webp)] bg-[length:100%_100%] lg:max-w-[262px] flex justify-center transition-transform transform hover:scale-x-105 animate-move-scale md:max-w-48 sm:max-w-40 max-w-[132px] w-full'>
                                        <h3 className='font-luckiest font-normal lg:text-[28px] md:text-xl text-sm text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-4'>MANIFESTO</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:pt-[867px] pt-[750px] bg-[url(/assets/images/webp/meet-peperuney-bg-2.webp)] bg-cover bg-no-repeat bg-center">
                <div className="mx-auto w-full flex flex-col items-center">
                    <Link href="/" className='bg-[url(/assets/images/webp/buy-btn-bg.webp)] bg-[length:100%_100%] lg:max-w-[262px] flex justify-center transition-transform transform hover:scale-x-105 animate-move-scale md:max-w-48 sm:max-w-40 max-w-[132px] w-full'>
                        <h3 className='font-luckiest font-normal lg:text-[28px] md:text-xl text-sm text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-4'>BUY $PEPERUNEY</h3>
                    </Link>
                    <Image className='!max-w-[161px] mx-auto w-full pointer-events-none' src="/assets/images/webp/all-in-man-img.webp" alt="all-in-man-img" width={161} height={69} />
                </div>
            </div>
        </div>
    )
}

export default MeetPeperuney
