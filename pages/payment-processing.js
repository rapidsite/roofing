import React from "react";
import NavbarEight from "../components/Layouts/NavbarEight";
import Footer from "../components/PaymentProcessing/Footer";
import Banner from "../components/PaymentProcessing/Banner";
import Partner from "../components/PaymentProcessing/Partner";
import Features from "../components/PaymentProcessing/Features";
import Cta from "../components/PaymentProcessing/Cta";
import HowWorks from "../components/PaymentProcessing/HowWorks";
import NewFeatures from "../components/PaymentProcessing/NewFeatures";
import Platform from "../components/PaymentProcessing/Platform";
import Funfact from "../components/PaymentProcessing/Funfact";
import ShopOnline from "../components/PaymentProcessing/ShopOnline";
import Contact from "../components/PaymentProcessing/Contact";
import SellSmarter from "../components/PaymentProcessing/SellSmarter";

const PaymentProcessing = () => {
  return (
    <>
      <NavbarEight />

      <Banner />

      <Partner />

      <Features />

      <SellSmarter />

      <Cta />

      <HowWorks />

      <NewFeatures />

      <Platform />

      <Funfact />

      <ShopOnline />
      
      <Contact />

      <Footer />
    </>
  );
};

export default PaymentProcessing;
