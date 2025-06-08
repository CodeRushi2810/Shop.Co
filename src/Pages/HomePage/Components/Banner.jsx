import '../../../../public/globalStyleSheet.css';
import './Banner.css';
import heroBannerMobileImage from '../../../assets/Images/heroBannerMobile.png';

function Banner() {
    return (
        <>
            <div className='bannerContainer flex justify-center'>
                <div className='w-full pt-6 md:max-w-screen-xl md:px-0 md:gap-10 md:max-xl:px-4 md:flex items-center'>
                    <div className='md:w-1/2'>
                        <div className='pt-10 px-4 flex flex-col md:p-0'>
                            <h1 className='heading-xl w-full md:max-w-lg mb-2'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                            <p className='paragraph subHeadingText w-full md:max-w-lg mb-4'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                            <button className='bg-black text-white py-2 rounded-full md:w-52'>Shop Now</button>
                        </div>
                        <div>
                            <div className='flex items-center justify-center gap-8 px-14 py-6 md:px-0 md:justify-start'>
                                <div>
                                    <p className='heading-md'>200+</p>
                                    <p className='subHeadingText caption'>International Brands</p>
                                </div>
                                <div className='line'></div>
                                <div>
                                    <p className='heading-md'>2,000+</p>
                                    <p className='subHeadingText caption'>High-Quality Products</p>
                                </div>
                                <div className='line hidden md:block'></div>
                                <div className='hidden md:block'>
                                    <p className='heading-md'>30,000+</p>
                                    <p className='subHeadingText caption'>Happy Customers</p>
                                </div>
                            </div>
                            <div className='flex justify-center md:hidden'>
                                <div>
                                    <p className='heading-md'>30,000+</p>
                                    <p className='subHeadingText caption'>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <img src={heroBannerMobileImage} alt="Shop Co" className='w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner