import React from "react";

const styleSheet = `
.hero-banner {
  background-image: url('/assets/bannermob.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

@media (min-width: 768px) {
  .hero-banner {
    background-image: url('/assets/banner.png');
  }
}

.font-headline {
  font-family: 'SF Pro', 'Inter', sans-serif;
  font-weight: 700;
  font-size: 54px;
  line-height: 60px;
}

@media (max-width: 640px) {
  .font-headline {
    font-size: 36px;
    line-height: 42px;
  }
}

/* ===== Smooth Entrance Animation ===== */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 1s ease forwards;
}

.fade-delay-1 { animation-delay: 0.2s; }
.fade-delay-2 { animation-delay: 0.4s; }
.fade-delay-3 { animation-delay: 0.6s; }
.fade-delay-4 { animation-delay: 0.8s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const Hero = () => {
  return (
    <>
      <style>{styleSheet}</style>

      {/* ================= HERO SECTION ================= */}
      <section
        id="hero-section"
        className="hero-banner relative w-full h-screen text-white flex items-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 mt-10 w-full">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl space-y-8 fade-up">

              {/* Badge */}
              <span className="inline-block bg-[#1C2D43] px-4 py-1.5 rounded-full text-sm font-semibold border border-yellow-400/30 fade-up fade-delay-1">
                ADMISSIONS OPEN 2025–26
              </span>

              {/* Heading */}
              <h1 className="font-headline tracking-tight text-left fade-up fade-delay-2">
                Aikyam School
                <span
                  className="block font-light italic"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Premium Preschool & Daycare
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-200 text-base sm:text-lg font-medium max-w-2xl text-left fade-up fade-delay-3">
                Secure your child’s place at <b>Aikyam School</b> — a nurturing,
                play-based environment for <b>Daycare, Toddler, Play Group,
                Nursery, LKG and UKG</b>.
                <br />
                Apply now for the 2025–26 academic year!
              </p>

              {/* CTA BUTTON */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfbPNn-JeJn3qJRY5bMVg7luMmDG_ztUE-qcGxy6sJyLRjwOg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 fade-up fade-delay-4"
              >
                <button
                  className="px-8 py-3 rounded-[16px] font-semibold text-sm sm:text-base text-black
                  cursor-pointer transition transform hover:scale-105 active:scale-95"
                  style={{
                    background:
                      "linear-gradient(180deg, #FFD54F 0%, #FFC107 100%)",
                    boxShadow:
                      "0px -6px 14px #FFFFFF7A inset, 0px 6px 18px #0000001A",
                  }}
                >
                  Apply Now
                </button>
              </a>

              {/* ================= ICON POINTS ================= */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 max-w-3xl fade-up fade-delay-4">

                <div className="flex items-center space-x-3">
                  <i className="fa-solid fa-city text-3xl text-yellow-300"></i>
                  <p className="font-semibold text-xl">1 City</p>
                </div>

                <div className="flex items-center space-x-3">
                  <i className="fa-solid fa-school text-3xl text-yellow-300"></i>
                  <p className="font-semibold text-xl">1 Center</p>
                </div>

                <div className="flex items-center space-x-3">
                  <i className="fa-solid fa-child-reaching text-3xl text-yellow-300"></i>
                  <p className="font-semibold text-xl">Child-Centric</p>
                </div>

                <div className="flex items-center space-x-3">
                  <i className="fa-solid fa-heart text-3xl text-yellow-300"></i>
                  <p className="font-semibold text-xl">Holistic Care</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
