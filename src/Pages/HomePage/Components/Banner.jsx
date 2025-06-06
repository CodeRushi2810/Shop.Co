import '../../../../public/globalStyleSheet.css';
import './Banner.css';

function Banner() {
    return (
        <>
            <div className='flex justify-center bannerContainer'>
                <div className='flex items-center gap-10 w-full px-2 my-7 md:max-w-7xl md:my-7 md:px-0'>
                    <h1 className='heading-xl w-full md:max-w-lg'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                </div>
            </div>
        </>
    )
}

export default Banner