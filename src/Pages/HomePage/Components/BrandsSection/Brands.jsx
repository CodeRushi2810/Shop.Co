import versace from '../../../../assets/Images/versace.png';
import zara from '../../../../assets/Images/zara.png';
import gucci from '../../../../assets/Images/gucci.png';
import prada from '../../../../assets/Images/prada.png';
import calvinklein from '../../../../assets/Images/ck.png';

function Banner() {
    return (
        <>
            <div className='flex bg-black justify-center'>
                <div className='flex flex-wrap gap-8 justify-center py-10 md:justify-between container mx-auto px-4'>
                    <img src={versace} alt="" className='h-6 md:h-8'/>
                    <img src={zara} alt="" className='h-6 md:h-8'/>
                    <img src={gucci} alt="" className='h-6 md:h-8'/>
                    <img src={prada} alt="" className='h-6 md:h-8'/>
                    <img src={calvinklein} alt="" className='h-6 md:h-8'/>
                </div>
            </div>
        </>
    )
}

export default Banner