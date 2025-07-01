import React from "react";
import CategoryGallery from "../components/Home/Category/CategoryGallery";
import Accordion from "../components/Home/FAQData/Accordion";
import InfoDiv from "../components/Home/Information/InfoDiv";
import Menus from "../components/Home/Menus/Menus";
import OffersSection from "../components/Home/OfferSection/OffersSection";
import Layout from "../pages/Layout";

const Home = () => {
  return (
    <Layout>
      <Menus />
      <CategoryGallery />
      <OffersSection />
      <InfoDiv />
      <Accordion />
    </Layout>
  );
};

export default Home;
