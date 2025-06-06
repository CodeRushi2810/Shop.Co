import { ReactComponent as SearchIcon } from '../../src/assets/Images/searchIcon.svg';
import { ReactComponent as CartIcon } from '../../src/assets/Images/cart.svg';
import { ReactComponent as ProfileIcon } from '../../src/assets/Images/profile.svg';
import { ReactComponent as DownArrowIcon } from '../../src/assets/Images/downArrow.svg';
import '../globalStyleSheet.css';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className='flex justify-center'>
                <ul className='flex items-center gap-10 w-full px-2 my-7 md:max-w-7xl md:my-7 md:px-0'>
                    <li className='flex'>
                        <h3 className='heading-xl text-4xl font-black'>SHOP.CO</h3>
                    </li>
                    <li className='flex gap-6 items-center'>
                        <a className='paragraph flex items-center gap-1'>Shop <DownArrowIcon width={16} height={16} fill="#000000" /></a>
                        <a className='paragraph'>On Sale</a>
                        <a className='paragraph'>New Arrivals</a>
                        <a className='paragraph'>Brands</a>
                    </li>
                    <li className='flex searchInputContainer'>
                        <div className='flex items-center gap-3 searchInputWrapper paragraph py-3 px-4 rounded-full'>
                            <div>
                                <SearchIcon width={32} height={32} fill="#909090" />
                            </div>
                            <input type="text" className='outline-none searchInputWrapper' placeholder='Search for products...' />
                        </div>
                    </li>
                    <li className='flex gap-4'>
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