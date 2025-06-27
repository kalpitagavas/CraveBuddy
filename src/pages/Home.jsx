
import CategoryGallery from "../components/Home/Category/CategoryGallery";
import Accordion from "../components/Home/FAQData/Accordion";
import Footer from "../components/Footer/Footer";
import InfoDiv from "../components/Home/Information/InfoDiv";
import Menus from "../components/Home/Menus/Menus";
import Navbar from "../components/Navbar/Navbar";
import OffersSection from "../components/Home/OfferSection/OffersSection";
import StickyChatButton from "../components/Home/StickyChatButton/StickyChatButton";

const Home = () => {
  return (
    <>
        <Navbar/>
        <Menus />
        <CategoryGallery />
        <OffersSection/>
        <InfoDiv />
        <Accordion />
        <StickyChatButton/>
        <Footer/>
    </>
  );
};

export default Home;