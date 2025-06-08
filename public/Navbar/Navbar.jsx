import '../globalStyleSheet.css';
import './Navbar.css';
import { icons } from '../../src/assets/Icons/IconMappings'
import Hamburger from '../Hamburger/Hamburger';

function Navbar({mockData}) {

    const DownArrowIcon = icons[mockData.downArrowIcon];
    const SearchIcon = icons[mockData.searchIcon];
    const CartIcon = icons[mockData.cartIcon];
    const ProfileIcon = icons[mockData.profileIcon];

    return (
        <>
            <div className='flex justify-center bg-white'>
                <ul className='flex items-center w-full py-6 md:gap-10 container mx-auto px-4'>
                    <li className='flex mr-4 md:hidden'>
                        <Hamburger />
                    </li>
                    <li className='flex mr-auto md:mr-0'>
                        <h3 className='logo md:heading-xl md:text-4xl md:font-black'>{mockData.logo}</h3>
                    </li>
                    <li className='hidden md:flex md:gap-6 md:items-center mr-auto'>
                        {mockData.navItems.map((item, index) => (
                            item.isExpandable ? (
                                <a key={index} className="paragraph flex items-center gap-1">
                                    {item.text}
                                    <DownArrowIcon width={16} height={16} fill="#000000" />
                                </a>
                            ) : (
                                <a key={index} className="paragraph">
                                    {item.text}
                                </a>
                            )
                        ))}
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