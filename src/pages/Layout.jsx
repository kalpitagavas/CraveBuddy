import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StickyChatButton from "../components/Home/StickyChatButton/StickyChatButton";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden mt-10 md:mt-4 ">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <StickyChatButton />
      <Footer />
    </div>
  );
};

export default Layout;
