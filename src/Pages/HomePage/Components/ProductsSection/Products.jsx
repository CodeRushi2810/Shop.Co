import '../../../../../public/globalStyleSheet.css';
import ProductCard from '../../../../../public/ProductCard/ProductCard';

function Products({ mockData }) {
    return (
        <>
            <div className='flex  justify-center'>
                <div className='flex container mx-auto px-4'>
                    <div className='flex flex-col w-full justify-center items-center'>
                        <h2 className="heading-xl">{mockData.heading}</h2>
                        <div className="grid grid-cols-1 gap-4 my-10 w-full md:gap-8 sm:max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:grid-cols-4">
                            {mockData.products.map((product, index) => (
                                <ProductCard key={index} data={product} defaultCurrency={mockData.defaultCurrency} />
                            ))}
                        </div>
                        <button className='text-black font-medium py-2 px-10 border rounded-full'>{mockData.ctaText}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products