// NavbarDark.jsx
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

const ChevronDown = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const NAV_HEIGHT_CSS = "72px";

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const mode = !darkMode;
    setDarkMode(mode);

    if (mode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight || 400;
      setScrolled(window.scrollY > heroHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#3776BE]" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left - Logo + Hamburger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl md:hidden">
            {open ? "✕" : "☰"}
          </button>

          <div
            className={`transition-all duration-500 ${
              scrolled
                ? "bg-white rounded-br-full rounded-tr-full p-1 px-3 shadow-lg"
                : ""
            }`}>
            <img
              src="assets/logo.png"
              alt="logo"
              className="h-11 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium relative">
          <li><a href="/" className="hover:text-gray-200">HOME</a></li>
          <li className="relative group">
            <a href="/about" className="flex items-center space-x-1 hover:text-gray-200">
              <span>ABOUT US</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </li>
          <li><a href="/industries" className="hover:text-gray-200">INDUSTRIES</a></li>
          <li><a href="/clients" className="hover:text-gray-200">OUR CLIENTS</a></li>
          <li><a href="/contact" className="hover:text-gray-200">CONTACT US</a></li>

          <li className="relative group">
            <a href="/services" className="flex items-center space-x-1 hover:text-gray-200">
              <span>OUR SERVICES</span>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition" />
            </a>
          </li>
        </ul>

        {/* ⭐ Dark / Light Icon Toggle */}
        <button
          onClick={toggleTheme}
          className="text-white text-2xl p-2 rounded-full hover:bg-white/20 transition duration-300"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{ top: NAV_HEIGHT_CSS }}
          className="fixed bottom-0 left-0 right-0 bg-[#071829]/95 backdrop-blur-lg text-white px-6 py-6 md:hidden z-40 flex flex-col justify-between">

          <div className="space-y-6 text-lg font-medium overflow-y-auto flex-grow">
            <a href="/" className="block border-b pb-2 border-[#2F3F4F]">HOME</a>
            <a href="/about" className="block border-b pb-2 border-[#2F3F4F]">ABOUT US</a>
            <a href="/industries" className="block border-b pb-2 border-[#2F3F4F]">INDUSTRIES</a>
            <a href="/clients" className="block border-b pb-2 border-[#2F3F4F]">OUR CLIENTS</a>
            <a href="/contact" className="block border-b pb-2 border-[#2F3F4F]">CONTACT US</a>

            {/* Services dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left border-b pb-2 border-[#2F3F4F] flex items-center">
                <span>OUR SERVICES</span>
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <a href="/service1" className="block px-3 py-2 border-b border-gray-700">Service 1</a>
                  <a href="/service2" className="block px-3 py-2 border-b border-gray-700">Service 2</a>
                  <a href="/service3" className="block px-3 py-2 border-b border-gray-700">Service 3</a>
                </div>
              )}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-5 mt-6 pt-4 border-t border-[#2F3F4F]">
            <a href="#" className="border p-3 rounded-lg"><FaFacebookF /></a>
            <a href="#" className="border p-3 rounded-lg"><FaInstagram /></a>
            <a href="#" className="border p-3 rounded-lg"><FaLinkedinIn /></a>
            <a href="#" className="border p-3 rounded-lg"><FaTwitter /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
