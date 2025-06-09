import Infobar from '../../../public/Infobar/Infobar';
import Newsletter from '../../../public/Newsletter/Newsletter';
import Navbar from '../../../public/Navbar/Navbar';
import Banner from './Components/BannerSection/Banner';
import Brands from './Components/BrandsSection/Brands';
import Products from './Components/ProductsSection/Products';
import Categories from './Components/CategoriesSection/Categories';
import Reviews from './Components/ReviewsSection/Reviews';
import Footer from '../../../public/Footer/Footer';
import mockData from '../../../src/mocks/mockContent';

function HomePage() {

    console.log(mockData);
    const { infobar, navbar, banner, brands, newArrivals, topSellings, categories, reviews, newsletter, footer } = mockData.data.homePage;

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
                <Categories mockData={categories} />
                <Reviews mockData={reviews} />
            </main>
            <footer>
                <div className='relative'>
                    <Newsletter mockData={newsletter}/>
                    <Footer mockData={footer} />
                </div>
            </footer>
        </>
    );
}

export default HomePage;
