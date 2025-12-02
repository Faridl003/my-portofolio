import React from "react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <BrowserRouter>
      <main className="z-0">
        <main>
          {/* Gradien Image */}
          <img
            className="absolute top-0 right-0 opacity-60 -z-10"
            src="/gradient.png"
            alt="Gradient Img"
          />

          {/* Blur Effect */}
          <div
            className="h-0 w-[40rem] absolute top-[20%] right-[-5%]
      shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"
          ></div>

          <Navbar />
          <Hero />
        </main>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
