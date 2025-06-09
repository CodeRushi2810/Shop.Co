function Browse({ mockData }) {

    return (
        <>
            <div className='flex justify-center my-14'>
                <div className='bg-slate-100 flex flex-wrap justify-center rounded-3xl py-10 container mx-auto px-4'>
                    <h1 className="heading-lg font-black text-center w-full">{mockData.heading}</h1>

                    <div className="w-full grid grid-cols-3 gap-6 mt-6 mx-6">
                        {mockData.categories.map((category, index) => (
                            <div key={index} className={`w-full py-16 rounded-3xl bg-slate-200 ${category.cardType === 'rectangle' ? 'col-span-3 md:col-span-2' : 'col-span-3 md:col-span-1'}`}>
                                <h1>{category.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Browse