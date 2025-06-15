function Footer({ mockData }) {

    return (
        <>
            <div className='flex justify-center bg-[#F0F0F0]'>
                <div className='py-16 container mx-auto px-4'>
                    <div className="grid grid-cols-12">
                        <div className="w-full col-span-12 lg:col-span-3">
                            <h1 className="heading-lg font-black mb-3"><a href="http://" target="_blank" rel="noopener noreferrer"> {mockData.logo}</a></h1>
                            <p className="paragraph mb-4 text-[#666] font-normal">{mockData.subHeading}</p>
                        </div>
                        <div className="w-full col-span-12 grid grid-cols-12 lg:col-start-5 lg:col-span-8">
                            {mockData.footerItems.map((item, index) => (
                                <ul key={index} className="col-span-6 mb-6 md:col-span-4 lg:col-span-3">
                                    <li className="text-black paragraph font-semibold mb-3 tracking-widest">{item.title}</li>
                                    {item.items.map((item, index) => (
                                        <li key={index} className="text-[#666] paragraph font-normal mb-2"><a href="http://" target="_blank" rel="noopener noreferrer">{item.name}</a></li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className="w-full border-b mb-6"></div>

                    <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
                        <p className="text-center mb-4 text-[#666] paragraph font-normal">{mockData.footerText}</p>
                        <div className="flex justify-center">
                            {mockData.paymentMethods.map((item, index) => (
                                <a href="http://" target="_blank" rel="noopener noreferrer"><img key={index} src={item.logo} alt={item.name} /></a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer