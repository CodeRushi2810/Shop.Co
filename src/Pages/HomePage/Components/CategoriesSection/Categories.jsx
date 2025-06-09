function Categories({ mockData }) {

    return (
        <>
            <div className='flex justify-center my-14'>
                <div className='container mx-auto px-4'>
                    <div className='bg-[#F0F0F0] flex flex-wrap justify-center rounded-3xl py-10'>
                        <h1 className="heading-lg font-black text-center w-full">{mockData.heading}</h1>
                        <div className="w-full grid grid-cols-3 gap-6 mt-4 mx-4 md:mt-10 md:mx-10">
                            {mockData.categories.map((category, index) => (
                                <div key={index} className={`relative w-full rounded-3xl ${category.cardType === 'rectangle' ? 'col-span-3 md:col-span-2' : 'col-span-3 md:col-span-1'}`}>
                                    <h1 className="absolute heading-md font-bold mt-3 ml-4">{category.title}</h1>
                                    <img src={category.cardImage} alt={category.title} className="object-cover w-full h-72 rounded-3xl md:h-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories