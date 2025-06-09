import { icons } from '../../src/assets/Icons/IconMappings';

function ProductCard({ data }) {

    const isVerified = data.isVerified;
    const FullStar = icons.fullStar;
    const HalfStar = icons.halfStar;

    const fullStars = Math.floor(data.reviewerRating);
    const hasHalfStar = data.reviewerRating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FullStar key={`full-${i}`} width={24} height={24} fill="#FFC633" />);
    }

    if (hasHalfStar) {
        stars.push(<HalfStar key="half" width={24} height={24} fill="#FFC633" />);
    }

    return (
        <div className="mt-1 w-full h-full border rounded-3xl p-4 md:p-6">
            <div className='flex mb-3'>
                {stars}
            </div>
            <div className='flex items-center mb-2 gap-1'>
                <p className="subheading font-bold">{data.reviewerName}</p>
                {isVerified ? (
                    <icons.verified width={24} height={24} />
                ) : (
                    <></>
                )}
            </div>
            <p className="paragraph font-normal text-[#00000099]">{data.review}</p>
        </div>
    );
}

export default ProductCard;