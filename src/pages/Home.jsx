import CategoryGallery from "../components/Category/CategoryGallery";
import Accordion from "../components/FAQData/Accordion";
import Footer from "../components/Footer/Footer";
import InfoDiv from "../components/Information/InfoDiv";
import Menus from "../components/Menus/Menus";
import Navbar from "../components/Navbar/Navbar";
import OffersSection from "../components/OfferSection/OffersSection";

const Home = () => {
  return (
    <>
    
   <Navbar/>
      
        <Menus />
        <CategoryGallery />
        <OffersSection/>
        <InfoDiv />
        <Accordion />
        <Footer/>
    </>
  );
};

export default Home;