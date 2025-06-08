import '../globalStyleSheet.css';
import { icons } from '../../src/assets/Icons/IconMappings'


function ProductCard({ data, defaultCurrency }) {
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

    const isDiscountProvided = data.discountedPrice < data.originalPrice ? true : false;

    return (
        <>
            <div>
                <img src={data.productImages[0].url} alt={data.name} className="w-full h-64 object-fill rounded-3xl" />
                <h1 className="subheading capitalize font-semibold mt-3">{data.name}</h1>

                <div className="flex mt-1">
                    {stars}
                    <p className='ml-2 text-black font-medium'>{data.ratings}</p>
                    <p className='text-black font-medium'>/</p>
                    <p className='text-slate-700 font-medium'>5</p>
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
        </>
    );
}

export default ProductCard;