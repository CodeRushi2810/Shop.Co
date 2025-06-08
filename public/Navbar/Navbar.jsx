import { ReactComponent as SearchIcon } from '../../src/assets/Images/searchIcon.svg';
import { ReactComponent as CartIcon } from '../../src/assets/Images/cart.svg';
import { ReactComponent as ProfileIcon } from '../../src/assets/Images/profile.svg';
import { ReactComponent as DownArrowIcon } from '../../src/assets/Images/downArrow.svg';
import '../globalStyleSheet.css';
import './Navbar.css';
import Hamburger from '../Hamburger/Hamburger';

function Navbar() {
    return (
        <>
            <div className='flex justify-center'>
                <ul className='flex items-center w-full px-4 py-6 md:max-w-screen-xl md:px-0 md:gap-10 md:max-xl:px-4'>
                    <li className='flex mr-4 md:hidden'>
                        <Hamburger />
                    </li>
                    <li className='flex mr-auto md:mr-0'>
                        <h3 className='logo md:heading-xl md:text-4xl md:font-black'>SHOP.CO</h3>
                    </li>
                    <li className='hidden md:flex md:gap-6 md:items-center mr-auto'>
                        <a className='paragraph flex items-center gap-1'>Shop <DownArrowIcon width={16} height={16} fill="#000000" /></a>
                        <a className='paragraph'>On Sale</a>
                        <a className='paragraph'>New Arrivals</a>
                        <a className='paragraph'>Brands</a>
                    </li>
                    <li className='hidden xl:flex searchInputContainer'>
                        <div className='flex items-center gap-3 searchInputWrapper paragraph py-3 px-4 rounded-full'>
                            <div>
                                <SearchIcon width={24} height={24} fill="#909090" />
                            </div>
                            <input type="text" className='outline-none searchInputWrapper' placeholder='Search for products...' />
                        </div>
                    </li>
                    <li className='flex gap-4'>
                        <div className='xl:hidden'>
                            <SearchIcon width={24} height={24} fill="#000000" />
                        </div>
                        <div>
                            <CartIcon width={24} height={24} fill="#000000" />
                        </div>
                        <div>
                            <ProfileIcon width={24} height={24} fill="#000000" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar