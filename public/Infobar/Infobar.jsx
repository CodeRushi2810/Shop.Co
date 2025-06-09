import { icons } from '../../src/assets/Icons/IconMappings'

function Infobar({ mockData }) {

    const DismissIcon = icons[mockData.dismissIcon];

    return (
        <>
            <div className='bg-black'>
                <div className='flex justify-between items-center py-4 container mx-auto px-4'>
                    <h1 className='text-white paragraph ml-auto'>{mockData.text}</h1>
                    <a href="https://google.com" className='text-white paragraph underline ml-2 mr-auto'>{mockData.ctaText}</a>
                    <button className='hidden sm:block'>
                        <DismissIcon width={14} height={14} fill="white" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Infobar