import React from "react";
import NavbarFive from "../components/Layouts/NavbarFive";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/App/Banner";
import Partner from "../components/App/Partner";
import About from "../components/App/About";
import Cta from "../components/App/Cta";
import Features from "../components/App/Features";
import Feedback from "../components/App/Feedback";
import Download from "../components/App/Download";
import Faq from "../components/App/Faq";
import Blog from "../components/App/Blog";
import Subscribe from "../components/App/Subscribe";

const App = () => {
  return (
    <>
      <NavbarFive />

      <Banner />

      <Partner />

      <About />

      <Cta />

      <Features />

      <Feedback />

      <Download />

      <Faq />

      <Blog />

      <Subscribe />
      
      <Footer />
    </>
  );
};

export default App;
