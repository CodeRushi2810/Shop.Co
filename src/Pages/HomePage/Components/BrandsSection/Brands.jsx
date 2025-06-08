function Banner({ mockData }) {

    return (
        <>
            <div className='flex bg-black justify-center mb-14'>
                <div className='flex flex-wrap gap-8 justify-center py-10 md:justify-between container mx-auto px-4'>
                    {mockData.map((brand, index) => (
                        <img key={index} src={brand.logo} alt="" className='h-6 md:h-8' />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Banner