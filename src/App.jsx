import "./App.css";
import CategoryGallery from "./components/Category/CategoryGallery";
import Accordion from "./components/FAQData/Accordion";
import Footer from "./components/Footer/Footer";
import InfoDiv from "./components/Information/InfoDiv";
import Menus from "./components/Menus/Menus";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Menus />
        <CategoryGallery />
        <InfoDiv />
        <Accordion />
        <Footer/>
      </main>
    </>
  );
}

export default App;
