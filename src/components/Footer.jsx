import React, { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

/* X (Twitter) Icon */
const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M18.9 2H22L14.9 10.1L23.3 22H16.8L11.7 14.9L5.7 22H2.6L10.2 13.2L2.1 2H8.8L13.4 8.3L18.9 2Z"
      fill="white"
    />
  </svg>
);

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ===== Scroll Animation ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== Animations ===== */}
      <style>{`
        .footer-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .footer-reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <footer
        ref={footerRef}
        className={`bg-gradient-to-t from-[#041121] via-[#0d1645] to-[#141b50] text-white footer-reveal ${
          visible ? "show" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* ================= MAIN GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* ================= SCHOOL INFO ================= */}
            <div className="space-y-6 lg:col-span-2 text-center lg:text-left">
              <img
                src="/assets/logo.png"
                alt="Aikyam Preschool Logo"
                className="h-14 mx-auto lg:mx-0"
                style={{ filter: "brightness(0) invert(1)" }} // 👈 white logo
              />

              <h2 className="text-2xl font-bold">
                Aikyam Preschool
              </h2>

              <p className="text-[#FFFFFFBF] leading-relaxed max-w-md mx-auto lg:mx-0">
                A nurturing space where young minds grow with joy, curiosity,
                and confidence through play-based learning.
              </p>
            </div>

            {/* ================= LOCATION ================= */}
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-[#4CA8FF]">
                Contact Information
              </h3>

              <div className="text-sm text-[#FFFFFFBF] leading-relaxed">
                <p className="font-semibold text-white mb-1">Our Location</p>
                <p>
                  AIKYAM PRESCHOOL <br />
                  Plot 52, Gandham Sri Nilayam <br />
                  Prashant Nagar Colony <br />
                  Behind Sai Veda Hospital <br />
                  Bandlaguda Jagir <br />
                  Hyderabad, Telangana – 500086 <br />
                  India
                </p>
              </div>
            </div>

            {/* ================= CONTACT + SOCIAL ================= */}
            <div className="space-y-6 text-center lg:text-left">

              <div>
                <h3 className="text-xl font-semibold text-[#4CA8FF] mb-1">
                  Call Us
                </h3>
                <p className="text-[#FFFFFFBF]">
                  +91 903080 2211
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#4CA8FF] mb-1">
                  Email Us
                </h3>
                <a
                  href="mailto:aikyampreschool@gmail.com"
                  className="text-[#FFFFFFBF] hover:text-white transition"
                >
                  aikyampreschool@gmail.com
                </a>
              </div>

              {/* ================= SOCIAL ================= */}
              <div>
                <h3 className="text-xl font-semibold text-[#4CA8FF] mb-4">
                  Follow Us
                </h3>

                <div className="flex justify-center lg:justify-start space-x-4">
                  {[Facebook, XIcon, Instagram, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-11 h-11 flex items-center justify-center rounded-xl
                      bg-[#4CA8FF1F] border border-[#4CA8FF4D]
                      hover:bg-[#4CA8FF33] transition"
                    >
                      {typeof Icon === "function" ? <Icon /> : <Icon className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <hr className="my-10 h-[1px] border-0 bg-[#47EBCD40]" />

          {/* ================= COPYRIGHT ================= */}
          <div className="text-center text-sm text-[#FFFFFFBF]">
            © {new Date().getFullYear()} Aikyam Preschool. All Rights Reserved.
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
