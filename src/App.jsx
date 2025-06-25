import "./App.css";
import CategoryGallery from "./components/Category/CategoryGallery";
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
        <InfoDiv/>
      </main>
    </>
  );
}

export default App;
