import { icons } from '../../src/assets/Icons/IconMappings'

function Newsletter({ mockData }) {

    const EmailIcon = icons[mockData.emailLogo];

    return (
        <>
            <div className='flex justify-center bg-white'>
                <div className='container mx-auto px-4'>
                    <div className="w-full grid grid-cols-12 bg-black px-4 py-4 mb-14 md:px-16 md:py-9 rounded-2xl">
                        <h1 className="text-white heading-xl font-black mb-4 col-span-12 lg:mb-0 lg:col-span-8 xl:col-span-8">{mockData.heading}</h1>
                        <div className="col-span-12 lg:col-span-4  xl:col-start-10">
                            <div className='flex items-center mb-4 bg-white px-4 rounded-3xl'>
                                <EmailIcon width={24} height={24} fill="#999999" className="" />
                                <input type="text" placeholder={mockData.emailInputPlaceholder} className="bg-inherit w-full py-3 px-4 rounded-3xl outline-none" />
                            </div>
                            <button className="paragraph font-bold bg-white w-full py-3 px-4 rounded-3xl">{mockData.ctaText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter