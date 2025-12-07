import "boxicons/css/boxicons.min.css";
import React from "react";
import { Tilt } from "react-tilt";
import { profile } from "../assets";

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
      bg-gradient-to-r from-[#00cea8] to-[#bf61ff]
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
      {/* Profile Image */}
      <div className="absolute top-[35%] lg:top-[25%] md:top-[20%] sm:top-[25%] xs:top-[20%] right-0 lg:right-[5%] w-full lg:w-1/2 flex justify-center lg:justify-end z-0">
        <Tilt
          options={{
            max: 25,
            scale: 1.05,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
          }}
          className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
        >
          <div className="w-full h-full relative p-[4px] rounded-full bg-gradient-to-tr from-[#00cea8] via-[#bf61ff] to-[#ff56f3] animate-float">
            <div className="bg-primary w-full h-full rounded-full overflow-hidden relative">
              <img
                src={profile}
                alt="Miftah Faridl Profile"
                className="w-full h-full object-cover"
              />
              {/* Overlay for "cool" look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none mix-blend-overlay"></div>
            </div>
            {/* Glowing blur effect behind */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00cea8] via-[#bf61ff] to-[#ff56f3] rounded-full blur-2xl opacity-30 -z-10 animate-pulse"></div>
          </div>
        </Tilt>
      </div>
    </main>
  );
};

export default Hero;
