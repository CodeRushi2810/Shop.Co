import { ReactComponent as DismissIcon } from '../../src/assets/Images/cross.svg';
import '../globalStyleSheet.css';

function Infobar() {
    return (
        <>
            <div className='bg-black flex justify-center px-1 py-4 sm:p-4'>
                <div className='infobarWrapper flex justify-between items-center w-full md:max-w-7xl'>
                    <h1 className='text-white paragraph ml-auto'>Sign up and get 20% off to you first order.</h1>
                    <a href="https://google.com" className='text-white paragraph underline ml-2 mr-auto'>Sign Up Now</a>
                    <button className='hidden sm:block'>
                        <DismissIcon width={14} height={14} fill="white" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Infobar