import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";
const LazySpline = React.lazy(() => import("@splinetool/react-spline"));
const Hero = () => {
  return (
    <main
      className="flex lg:mt-20 flex-col lg:flex-row
     items-center justify-between min-h-[calc(90vh-6rem)]"
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        <div
          className="relative w-[95%] sm:w-48 h-10 
      bg-gradient-to-r from-[#656565] to-[#e99b63]
       shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full"
        >
          <div
            className="absolute inset-[3px] bg-black rounded-full
         flex items-center justify-center gap-1"
          >
            <i class="bx bx-diamond">
              <span className="-">Introduction</span>
            </i>
          </div>
        </div>
        {/* Main Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
         font-bold tracking-wide my-8"
        >
          Miftah Faridl <br /> Al Faruqi
        </h1>

        <p
          className="text-base sm:text-lg tracking-wider text-secondary 
        max-w-[25rem] lg:max-w-[30rem]"
        >
          I bring a strong passion for full-stack web development and a
          commitment to technical excellence.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-12">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4
          sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider 
          transition-all duration-300 hover:bg-[#1a1a1a]"
            href="https://drive.google.com/file/d/1NUubTiTggVcLw0tGdJ-ayjNFEl_xSL39/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV &nbsp;
            <i class="bx bx-link-external"></i>
          </a>
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8
          sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider 
          transition-all bg-gray-300 text-black duration-300 hover:bg-[#1a1a1a]"
            href="#about"
          >
            GetStarted &nbsp;
            <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
      {/* 3D Robot */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[45%] sm:left-[-2rem] h-full max-w-[800px] h-[600px]"
        scene="https://prod.spline.design/P1fz1L7XWghQtDuu/scene.splinecode"
      />

      {/* <div
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
        className="hidden lg:block w-[550px] h-[550px] relative"
      >
        <Suspense fallback={<div></div>}>
          <LazySpline scene="https://prod.spline.design/P1fz1L7XWghQtDuu/scene.splinecode" />
        </Suspense>
      </div> */}
    </main>
  );
};

export default Hero;
