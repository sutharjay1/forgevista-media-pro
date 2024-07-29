import React, { useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import EFooter from "../extraComponent/EFooter";
import { H3 } from "../components/typographyh3";
import Button from "../components/Button";
import EAccordian from "../extraComponent/EAccordian";
import EJobifyLandingPage from "../extraComponent/EJobifyLandingPage";
import EContactForm from "../extraComponent/EContactForm";
import EIntroduction from "../extraComponent/EIntroduction";

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
      {/* <MaxWidthWrapper className="py-10">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {components.map((component, index) => (
            <Button
              key={index}
              onClick={() => toggleShow(index)}
              className="bg-[#e77e38] hover:bg-[#ff6400] transition-colors duration-200 w-full"
            >
              {component.title}
            </Button>
          ))}
        </div>
      </MaxWidthWrapper>

      {components.map(
        (component, index) =>
          showStates[index] && (
            <div key={`component-${index}`} className="my-10">
              <component.component />
            </div>
          )
      )} */}

      <EJobifyLandingPage />
      <EAccordian />
      <EContactForm />
      <EIntroduction />
      <EFooter />
    </>
  );
};

export default ExtraComponent;
