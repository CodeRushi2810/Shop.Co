import Infobar from '../../../public/Infobar/Infobar';
import Navbar from '../../../public/Navbar/Navbar';
import Banner from './Components/BannerSection/Banner';
import Brands from './Components/BrandsSection/Brands';
function HomePage() {
    return (
        <>
            <header>
                <Infobar />
                <Navbar />
            </header>
            <main>
                <Banner />
                <Brands />
            </main>
            <footer>
            </footer>
        </>
    );
}

export default HomePage;
