import React from "react";
import EAccordian from "../extraComponent/EAccordian";
import EContactForm from "../extraComponent/EContactForm";
import EContactFormTwo from "../extraComponent/EContactFormTwo";
import EFooter from "../extraComponent/EFooter";
import EIntroduction from "../extraComponent/EIntroduction";
import EInvestBusiness from "../extraComponent/EInvestBusiness";
import EJim from "../extraComponent/EJim";
import EJobifyLandingPage from "../extraComponent/EJobifyLandingPage";
import EWhyChooseUs from "../extraComponent/EWhyChooseUs";
import GrowComponentHeroSection from "../extraComponent/GrowComponentHeroSection";
import EFooterTwo from "../extraComponent/EFooterTwo";
import EPayment from "../extraComponent/EPayment";
import EUI from "../extraComponent/EUI";
import EBigIdea from "../extraComponent/EBigIdea";

const ExtraComponent = () => {
  return (
    <>
      <EJobifyLandingPage />
      <EAccordian />
      <EWhyChooseUs />
      <EIntroduction />
      <EPayment />
      <EJim />
      <EUI />
      <GrowComponentHeroSection />
      <EInvestBusiness />
      <EContactForm />
      <EContactFormTwo />
      <EFooter />
      <EFooterTwo />
      <EBigIdea />
    </>
  );
};

export default ExtraComponent;
