import '../../../../../public/globalStyleSheet.css';
import './Banner.css';

function Banner({ mockData }) {
    return (
        <>
            <div className='bannerContainer flex justify-center'>
                <div className='flex flex-col items-center md:flex-row gap-4 pt-6 container mx-auto px-4'>
                    <div className='md:w-1/2'>
                        <div className='pt-10 px-4 flex flex-col md:p-0'>
                            <h1 className='heading-xl w-full md:max-w-lg mb-2'>{mockData.heading}</h1>
                            <p className='paragraph subHeadingText w-full md:max-w-lg mb-4'>{mockData.subHeading}</p>
                            <button className='bg-black text-white py-2 rounded-full md:w-52'>{mockData.ctaText}</button>
                        </div>
                        <div>
                            <div className='flex items-center justify-center gap-4 px-14 py-6 md:px-0 md:justify-start'>
                                <div>
                                    <p className='heading-md'>{mockData.internationalBrands.count}</p>
                                    <p className='subHeadingText caption'>{mockData.internationalBrands.caption}</p>
                                </div>
                                <div className='line'></div>
                                <div>
                                    <p className='heading-md'>{mockData.highQualityProducts.count}</p>
                                    <p className='subHeadingText caption'>{mockData.highQualityProducts.caption}</p>
                                </div>
                                <div className='line hidden md:block'></div>
                                <div className='hidden md:block'>
                                    <p className='heading-md'>{mockData.happyCustomers.count}</p>
                                    <p className='subHeadingText caption'>{mockData.happyCustomers.caption}</p>
                                </div>
                            </div>
                            <div className='flex justify-center md:hidden'>
                                <div>
                                    <p className='heading-md'>{mockData.happyCustomers.count}</p>
                                    <p className='subHeadingText caption'>{mockData.happyCustomers.caption}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <img src={mockData.bannerImageURL} alt="Shop Co" className='w-full h-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner