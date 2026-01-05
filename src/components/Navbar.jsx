import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_HEIGHT = 72;

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to very top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setOpen(false); // close mobile menu if open
  };

  // Smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#3776BE] shadow-lg" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Hamburger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl md:hidden">
            {open ? "✕" : "☰"}
          </button>

          <img
            src="/assets/logo.png"
            alt="Aikyam Logo"
            className="h-11 cursor-pointer"
            onClick={scrollToTop}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          <li>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
              <i className="fa-solid fa-house"></i> Home
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
              <i className="fa-solid fa-school"></i> About
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("gallery")}
              className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
              <i className="fa-solid fa-image"></i> Gallery
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
              <i className="fa-solid fa-phone"></i> Contact
            </button>
          </li>

          {/* CTA */}
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbPNn-JeJn3qJRY5bMVg7luMmDG_ztUE-qcGxy6sJyLRjwOg/viewform"
              target="_blank"
              rel="noopener noreferrer">
              <button className="bg-[#6BA9EF] text-white px-5 py-2 rounded-md shadow hover:bg-[#5A8FD3] transition cursor-pointer">
                Apply Now
              </button>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{ top: NAV_HEIGHT }}
          className="fixed bottom-0 left-0 right-0 bg-[#071829]/95 backdrop-blur-lg text-white px-6 py-6 md:hidden z-40">
          <div className="space-y-6 text-lg font-medium">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 w-full text-left border-b pb-2 cursor-pointer">
              <i className="fa-solid fa-house"></i> Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center gap-3 w-full text-left border-b pb-2 cursor-pointer">
              <i className="fa-solid fa-school"></i> About
            </button>

            <button
              onClick={() => scrollToSection("gallery")}
              className="flex items-center gap-3 w-full text-left border-b pb-2 cursor-pointer">
              <i className="fa-solid fa-image"></i> Gallery
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-3 w-full text-left border-b pb-4 cursor-pointer">
              <i className="fa-solid fa-phone"></i> Contact
            </button>

            {/* Mobile CTA */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbPNn-JeJn3qJRY5bMVg7luMmDG_ztUE-qcGxy6sJyLRjwOg/viewform"
              target="_blank"
              rel="noopener noreferrer">
              <button className="w-full bg-[#6BA9EF] text-white px-5 py-3 rounded-md shadow hover:bg-[#5A8FD3] transition cursor-pointer">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
