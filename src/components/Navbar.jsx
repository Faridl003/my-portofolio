import React from "react";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  // Simple Function to Toggle Mobile Menu

  return (
    <header
      className="flex justify-between
   items-center py-4 px-4 lg:px-20"
    >
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-2xl md:text-4xl 
        lg:text-4xl font-light m-0"
      >
        Portofolio
      </h1>
      <nav className="hidden md:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#about"
        >
          Profile
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#experience"
        >
          Experience
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#works"
        >
          Project
        </a>
        {/* <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#contact"
        >
          Contact
        </a> */}
      </nav>

      <button
        onClick={() =>
          window.open(
            "https://wa.me/6281291112371?text=Halo%20saya%20ingin%20menghubungi%20Anda",
            "_blank"
          )
        }
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 
      rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
      >
        Contact
      </button>

      {/* Mobile Menu Icon */}
      <button onClick={toggleMenu} className="md:hidden text-3xl p-2 z-50">
        <i class="bx bx-menu"></i>
      </button>

      {/* Mobile Menu - Hidden by default */}
      {isOpen && (
        <div
          id="mobileMenu"
          className="fixed top-16 bottom-0 right-0
       left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 bg-black bg-opacity-70 backdrop-blur- md"
        >
          <nav className="flex flex-col gap-6 items-center">
            <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#about"
              onClick={closeMenu}
            >
              Profile
            </a>
            <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#experience"
              onClick={closeMenu}
            >
              Experience
            </a>
            <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#works"
              onClick={closeMenu}
            >
              Project
            </a>
            {/* <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
