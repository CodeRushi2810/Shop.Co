import Infobar from '../../../public/Infobar/Infobar';
import Navbar from '../../../public/Navbar/Navbar';
import Banner from './Components/Banner';
import Brands from './Components/Brands';
function HomePage() {
    return (
        <>
            <Infobar />
            <Navbar />
            <Banner />
            <Brands />

            {/* <div>
                <h1 className="heading-xl mt-8 ml-8">Build Beautiful Experiences</h1>
                <h2 className="heading-lg mt-8 ml-8">Crafted for Every Screen</h2>
                <h3 className="heading-md mt-8 ml-8">Responsive & Consistent</h3>
                <h4 className="heading-sm mt-8 ml-8">Powered by Raleway</h4>
                <p className="subheading mt-8 ml-8">This is a subheading text style</p>
                <p className="paragraph mt-8 ml-8">This paragraph automatically adjusts size & weight based on screen size.</p>
                <p className="caption mt-8 ml-8">This is a caption, often used below images or charts.</p>
                <p className="small mt-8 ml-8">Terms and conditions apply.</p>
            </div> */}
        </>
    );
}

export default HomePage;
