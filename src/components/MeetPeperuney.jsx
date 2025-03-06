import Image from "next/image"
import Link from "next/link"

const MeetPeperuney = () => {
    return (
        <div className="flex flex-col w-full bg-[url(/assets/images/png/meet-peperuney-bg.png)] bg-cover bg-no-repeat bg-center">
            <div className='flex flex-col items-center xl:pt-[282px] lg:pt-64 pt-44 -mt-1 w-full h-full overflow-hidden relative '>
                <Image className='!max-w-[1920px] max-md:min-w-4xl absolute pointer-events-none top-0 mx-auto w-full' src="/assets/images/png/melting-cheese.png" alt="melting-cheese-img" width={1920} height={272} />
                <div className="max-w-[1332px] px-4 w-full mx-auto">
                    <div className="flex flex-wrap justify-center max-lg:flex-col-reverse items-center">
                        <div className="lg:w-5/12 w-full max-lg:flex justify-center">
                            <Image className='!max-w-[580px] xl:min-w-[580px] w-full' src="/assets/images/png/meet-peperuney-pizza-img.png" alt="pizza-delivery-img" width={580} height={530} />
                        </div>
                        <div className="lg:w-7/12 w-full flex flex-col lg:items-end items-center text-start">
                            <Image className='!max-w-[613px] w-full flex items-start mx-auto' src="/assets/images/png/meet-peperuney-img.png" alt="peperuney-img" width={613} height={80} />
                            <div className="relative max-w-[715px] min-w-sm w-full bg-[url(/assets/images/png/white-board-bg.png)] bg-center bg-cover bg-no-repeat bg-">
                                <p className="pt-32 xl:ps-16 lg:ps-7 sm:ps-14 relative z-10 max-w-[660px] w-full !leading-[180%] lg:text-xl md:text-lg max-lg:px-4 pb-4">The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’. Spot the red hat and polo? You know it’s pizza time, baby! Whether he’s hustlin’ for the next big score or chillin’ with the Boys Club, PepeRuney guarantees one thing: the vibes and the dough are always rollin’</p>
                                <div className="flex max-w-[624px] border-t-2 pt-5 xl:pb-9 pb-14 mx-auto lg:ps-5 max-lg:px-4 items-center justify-between">
                                    <h3 className="lg:text-2xl text-lg">FEELS GREAT MAN!</h3>
                                    <Link className="transition-transform transform hover:scale-x-105 animate-move-scale" href="#">
                                        <Image className='xl:!max-w-[262px] md:max-w-56 sm:max-w-48 max-w-40 w-full' src="/assets/images/png/manifesto-btn.png" alt="manifesto-btn" width={262} height={74} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:pt-[867px] pt-[750px] bg-[url(/assets/images/png/meet-peperuney-bg-2.png)] bg-cover bg-no-repeat bg-center">
                <div className="mx-auto w-full">
                    <Link href="/">
                        <Image className='xl:!max-w-[262px] lg:max-w-56 transition-transform transform hover:scale-x-105 animate-move-scale md:max-w-48 sm:max-w-44 max-w-40 mx-auto w-full' src="/assets/images/png/buy-pepruney-btn.png" alt="buy-button" width={262} height={74} />
                    </Link>
                    <Image className='!max-w-[161px] mx-auto w-full' src="/assets/images/png/all-in-man-img.png" alt="all-in-man-img" width={161} height={69} />
                </div>
            </div>
        </div>
    )
}

export default MeetPeperuney
