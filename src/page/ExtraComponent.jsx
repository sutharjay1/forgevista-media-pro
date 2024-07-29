import React, { useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import EFooter from "../extraComponent/EFooter";
import { H3 } from "../components/typographyh3";
import Button from "../components/Button";
import EAccordian from "../extraComponent/EAccordian";
import EJobifyLandingPage from "../extraComponent/EJobifyLandingPage";
import EContactForm from "../extraComponent/EContactForm";
import EIntroduction from "../extraComponent/EIntroduction";
import EWhyChooseUs from "../extraComponent/EWhyChooseUs";
import EJim from "../extraComponent/EJim";
import GrowComponentHeroSection from "../extraComponent/GrowComponentHeroSection";

const ExtraComponent = () => {
  const components = [
    { title: "Footer", component: EFooter },
    { title: "Hero - Accordian", component: EAccordian },
    { title: "Jobify Landing Page", component: EJobifyLandingPage },
    { title: "Contact Form", component: EContactForm },
  ];

  const [showStates, setShowStates] = useState(components.map(() => false));

  const toggleShow = (index) => {
    setShowStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      <EJobifyLandingPage />
      <EAccordian />
      <EWhyChooseUs />
      <EIntroduction />
      <EJim />
      <GrowComponentHeroSection />
      <EContactForm />
      <EFooter />
    </>
  );
};

export default ExtraComponent;
