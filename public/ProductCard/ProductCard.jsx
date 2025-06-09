import '../globalStyleSheet.css';
import './ProductCard.css';
import { icons } from '../../src/assets/Icons/IconMappings';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef, useEffect, useState } from 'react';

function ProductCard({ data, defaultCurrency }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const FullStar = icons.fullStar;
    const HalfStar = icons.halfStar;

    const fullStars = Math.floor(data.ratings);
    const hasHalfStar = data.ratings % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FullStar key={`full-${i}`} width={24} height={24} fill="#FFC633" />);
    }

    if (hasHalfStar) {
        stars.push(<HalfStar key="half" width={24} height={24} fill="#FFC633" />);
    }

    const isDiscountProvided = data.discountedPrice < data.originalPrice;

    return (
        <div className="relative group w-full">
            <div className="relative">

                {/* Left Arrow */}
                <div
                    ref={prevRef}
                    className="absolute top-[45%] left-2 z-10 cursor-pointer p-2 rounded-full bg-white shadow 
                               opacity-0 group-hover:opacity-100 transition-all swiper-nav"
                >
                    <icons.downArrow className="rotate-90" width={20} height={20} />
                </div>

                {/* Right Arrow */}
                <div
                    ref={nextRef}
                    className="absolute top-[45%] right-2 z-10 cursor-pointer p-2 rounded-full bg-white shadow 
                               opacity-0 group-hover:opacity-100 transition-all swiper-nav"
                >
                    <icons.downArrow className="-rotate-90" width={20} height={20} />
                </div>

                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-bullets',
                        bulletClass: 'swiper-bullet',
                        bulletActiveClass: 'swiper-bullet-active',
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {data.productImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={item.url}
                                alt={data.name}
                                className="w-full h-64 object-fill rounded-3xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>

            <h1 className="subheading capitalize font-semibold mt-3">{data.name}</h1>

            <div className="flex mt-1">
                {stars}
                <p className="ml-2 text-black font-medium">{data.ratings}</p>
                <p className="text-black font-medium">/</p>
                <p className="text-slate-700 font-medium">5</p>
            </div>

            {isDiscountProvided ? (
                <div className="flex items-center gap-2 mt-3">
                    <p className="text-xl text-black font-bold">
                        {defaultCurrency}{data.discountedPrice}
                    </p>
                    <p className="text-xl text-gray-400 font-bold line-through">
                        {defaultCurrency}{data.originalPrice}
                    </p>
                    <p className="text-red-600 text-xs font-medium bg-red-100 py-1 px-3 rounded-full">
                        -{Math.round(((data.originalPrice - data.discountedPrice) / data.originalPrice) * 100)}%
                    </p>
                </div>
            ) : (
                <p className="text-xl text-black font-bold mt-3">{defaultCurrency}{data.originalPrice}</p>
            )}
        </div>
    );
}

export default ProductCard;
