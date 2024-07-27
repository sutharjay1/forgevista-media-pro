import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Projects from "./page/Projects";
import Services from "./page/Services";
import "/assets/font/PolySans-Median.woff2";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="w-full h-full min-h-screen flex flex-col bg-[#f3f6fd] text-[#16191E] font-polySans"
        style={{
          fontFamily: "PolySans",
        }}
      >
        <Header />
        <main className="flex-1 w-full">
          <AppRouter />
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
