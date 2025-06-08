import Infobar from '../../../public/Infobar/Infobar';
import Navbar from '../../../public/Navbar/Navbar';
import Banner from './Components/BannerSection/Banner';
import Brands from './Components/BrandsSection/Brands';
import Products from './Components/ProductsSection/Products';
import Browse from './Components/BrowseSection/Browse';
import mockData from '../../../src/mocks/mockContent';

function HomePage() {

    console.log(mockData);
    const { infobar, navbar, banner, brands, newArrivals, topSellings, browse } = mockData.data.homePage;

    return (
        <>
            <header>
                <Infobar mockData={infobar} />
                <Navbar mockData={navbar} />
            </header>
            <main>
                <Banner mockData={banner} />
                <Brands mockData={brands} />
                <Products mockData={newArrivals} />
                <div className='w-full border-b container mx-auto px-4 pt-14 mb-14'></div>
                <Products mockData={topSellings} />
                <Browse mockData={browse} />
            </main>
            <footer>
            </footer>
        </>
    );
}

export default HomePage;
