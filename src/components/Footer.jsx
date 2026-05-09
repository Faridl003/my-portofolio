import React from "react";
import { styles } from "../styles";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#050816] pt-12 pb-8 border-t border-[#2a2a2a] relative z-10">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6`}>

        {/* Brand / Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white font-bold text-[28px] tracking-widest cursor-pointer group">
            Miftah <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cea8] to-[#bf61ff] group-hover:from-[#bf61ff] group-hover:to-[#00cea8] transition-all duration-500">Faridl</span>
          </h2>
          <p className="text-[#aaa6c3] text-[14px] mt-2 text-center md:text-left font-medium">
            Crafting elegant digital experiences.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/miftahfaridla/" className="w-12 h-12 rounded-full bg-[#100d25] flex items-center justify-center border border-[#2a2a2a] hover:bg-gradient-to-r hover:from-[#00cea8] hover:to-[#bf61ff] hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <i className="bx bxl-linkedin text-2xl text-white"></i>
          </a>
          <a href="https://github.com/Faridl003" className="w-12 h-12 rounded-full bg-[#100d25] flex items-center justify-center border border-[#2a2a2a] hover:bg-gradient-to-r hover:from-[#00cea8] hover:to-[#bf61ff] hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <i className="bx bxl-github text-2xl text-white"></i>
          </a>
          <a href="mailto:[miftahfaridl2001@gmail.com]" className="w-12 h-12 rounded-full bg-[#100d25] flex items-center justify-center border border-[#2a2a2a] hover:bg-gradient-to-r hover:from-[#00cea8] hover:to-[#bf61ff] hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <i className="bx bx-envelope text-2xl text-white"></i>
          </a>
          {/* <a href="#" className="w-12 h-12 rounded-full bg-[#100d25] flex items-center justify-center border border-[#2a2a2a] hover:bg-gradient-to-r hover:from-[#00cea8] hover:to-[#bf61ff] hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <i className="bx bxl-instagram text-2xl text-white"></i>
          </a> */}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent mt-10"></div>

      {/* Copyright & Tech Stack */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center gap-4`}>
        <p className="text-[#aaa6c3] text-[13px] sm:text-[14px]">
          &copy; {new Date().getFullYear()} Miftah Faridl Al Faruqi. All rights reserved.
        </p>
        <p className="text-[#aaa6c3] text-[13px] sm:text-[14px] flex items-center gap-1">
          Built with <i className="bx bxl-react text-[#bf61ff] text-lg"></i> & <i className="bx bxl-tailwind-css text-[#00cea8] text-lg"></i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
