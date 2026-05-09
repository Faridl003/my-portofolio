import React, { useEffect } from "react";
import { styles } from "../styles";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Aos) {
      window.Aos.refresh();
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Tech", href: "#tech" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: "bxl-linkedin", href: "https://www.linkedin.com/in/miftahfaridla/", label: "LinkedIn" },
    { icon: "bxl-github", href: "https://github.com/Faridl003", label: "GitHub" },
    { icon: "bx-envelope", href: "mailto:miftahfaridl2001@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-[#050816] relative z-10 overflow-hidden">
      {/* Ambient glow behind footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-gradient-to-t from-[#bf61ff]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-[10%] w-[20rem] h-[20rem] bg-[#00cea8]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Animated top border */}
      <div className="w-full h-[2px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00cea8] to-transparent opacity-60 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#bf61ff] via-[#00cea8] to-[#bf61ff] opacity-30" />
      </div>

      <div className={`${styles.paddingX} max-w-7xl mx-auto pt-16 pb-10 relative`}>
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start" data-aos="fade-up" data-aos-duration="1000">

          {/* Brand */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <h2 className="text-white font-bold text-[32px] tracking-widest cursor-pointer group">
              Miftah{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cea8] to-[#bf61ff] group-hover:from-[#bf61ff] group-hover:to-[#00cea8] transition-all duration-500">
                Faridl
              </span>
            </h2>
            <p className="text-[#aaa6c3] text-[15px] mt-3 text-center md:text-left max-w-[280px] leading-relaxed">
              Crafting elegant digital experiences with passion and precision.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group relative w-11 h-11 rounded-full bg-[#100d25] flex items-center justify-center border border-[#2a2a2a] hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-lg overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00cea8] to-[#bf61ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <i className={`bx ${s.icon} text-xl text-white relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-[18px] mb-5 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#aaa6c3] text-[14px] hover:text-[#00cea8] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-[#00cea8] group-hover:w-4 transition-all duration-300 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch / CTA */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-white font-semibold text-[18px] mb-3 tracking-wide">Let&apos;s Work Together</h3>
            <p className="text-[#aaa6c3] text-[14px] max-w-[260px] leading-relaxed mb-5">
              Have a project in mind? I&apos;m always open to discussing new opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00cea8] to-[#bf61ff] text-white font-medium text-[14px] hover:shadow-[0_0_25px_rgba(191,97,255,0.4)] hover:scale-105 transition-all duration-300"
            >
              <i className="bx bx-paper-plane" />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent mt-14" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-[#aaa6c3] text-[13px] sm:text-[14px]">
            &copy; {new Date().getFullYear()} <span className="text-white font-medium">Miftah Faridl Al Faruqi</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-[#aaa6c3] text-[13px] sm:text-[14px] flex items-center gap-2">
              Built with{" "}
              <span className="flex items-center gap-1">
                <i className="bx bxl-react text-[#bf61ff] text-lg animate-spin-slow" />
                <i className="bx bxl-tailwind-css text-[#00cea8] text-lg" />
              </span>
            </p>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group w-9 h-9 rounded-full border border-[#2a2a2a] bg-[#100d25] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00cea8] hover:to-[#bf61ff] hover:border-transparent transition-all duration-300 hover:-translate-y-1"
            >
              <i className="bx bx-chevron-up text-white text-lg group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </footer>
  );
};

export default Footer;
