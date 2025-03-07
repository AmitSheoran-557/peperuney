import Image from 'next/image'
import Header from './common/Header'
import CustomPeperuneyAnimation from './common/CustomPeperuneyAnimation'

const Hero = () => {
    return (
        <div className='flex flex-col items-center w-full overflow-hidden relative bg-[url(/assets/images/webp/hero-bg.webp)] bg-cover bg-no-repeat bg-center'>
            <div className="max-w-[1332px] px-4 w-full mx-auto">
                <Header />
                <Image className='!max-w-[777px] xl:pt-[63px] xl:pb-[54px] max-xl:py-11 max-lg:py-8 max-md:py-5 mx-auto w-full pointer-events-none' src="/assets/images/webp/peperuney-img.webp" alt="buy-button" width={777} height={283} />
                <Image className='md:!max-w-[311px] max-w-64 z-10 relative lg:pb-7 md:pb-6 bikeImage pb-5 mx-auto w-full pointer-events-none' src="/assets/images/webp/delivery-img.webp" alt="delivery-boy-img" width={311} height={316} />
            </div>
            <div className='relative w-full sm:h-[100px] h-[76px] bg-red mx-auto flex justify-center items-center'>
                <Image className='!max-w-[1920px] absolute pointer-events-none sm:bottom-[100px] max-sm:min-w-[896px] max-sm:bottom-[76px] mx-auto w-full' src="/assets/images/webp/hero-pizza-img.webp" alt="pizza-img" width={1920} height={244} />
                <CustomPeperuneyAnimation customClass="bg-red sm:h-[100px] max-sm:h-[76px]" />
            </div>
        </div>
    )
}

export default Hero
