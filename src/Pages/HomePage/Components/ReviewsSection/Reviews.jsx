import '../../../../../public/globalStyleSheet.css';
import './Reviews.css';
import { icons } from '../../../../assets/Icons/IconMappings';

import ReviewCard from '../../../../../public/ReviewCard/ReviewCard';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { useRef } from 'react';

function Products({ mockData }) {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className='container mx-auto px-4'>
                <div className='w-full flex flex-col items-center mb-14'>
                    <div className='w-full flex justify-between items-end md:items-center'>
                        <h1 className='heading-lg font-black'>{mockData.heading}</h1>

                        <div className='flex gap-3'>

                            {/* Left Arrow */}
                            <div ref={prevRef} className=" z-10 cursor-pointer swiper-nav" >
                                <icons.arrow className="rotate-180" width={32} height={32} />
                            </div>

                            {/* Right Arrow */}
                            <div ref={nextRef} className=" z-10 cursor-pointer swiper-nav" >
                                <icons.arrow width={32} height={32} />
                            </div>
                        </div>
                    </div>


                    <div className='relative w-full mt-10'>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}
                            loop={true}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            className="review-swiper">
                            {mockData.reviews.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ReviewCard key={index} data={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products