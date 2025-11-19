import React from "react";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full h-[130vh] md:h-[140vh] overflow-hidden text-white flex flex-col">

      {/* ---------------- BACKGROUND VIDEO ---------------- */}
      <video
        className="absolute inset-0 w-full h-[100%] object-cover"
        src="/assets/bgvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* ---------------- LEFT SIDE LOGO BOX ---------------- */}
      <div className="relative z-20 flex flex-col justify-start items-start mt-28 md:mt-36 px-6 w-full max-w-6xl mx-auto">

        <div className="bg-black/40 backdrop-blur-md px-10 py-6 rounded-xl shadow-2xl max-w-xl text-left border border-white/10">
          
          {/* Logo Image */}
          <img
            src="/assets/logo.png"
            alt="AVI Consultants Logo"
            className="h-16 md:h-20 mb-3 object-contain brightness-0 invert"
          />

          {/* White Bold Logo Text */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2">
            AVI CONSULTANTS
          </h1>

          {/* Sub Tagline */}
          <p className="text-yellow-400 text-lg md:text-xl font-semibold leading-snug">
            “India’s Premier Engineering, Valuation & Strategic Advisory Experts”
          </p>
        </div>

        {/* ---------------- FEATURE TILES ---------------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 w-full">

          {/* Tile 1 */}
          <div className="bg-[url('/assets/tile1.png')] bg-cover bg-center rounded-xl p-6 h-44 sm:h-52 backdrop-blur-md bg-black/40 border border-white/10 hover:scale-105 transition cursor-pointer">
            <p className="text-yellow-400 font-bold text-3xl">Who</p>
            <p className="text-white text-3xl font-semibold -mt-1">We Are</p>
          </div>

          {/* Tile 2 */}
          <div className="bg-[url('/assets/tile2.png')] bg-cover bg-center rounded-xl p-6 h-44 sm:h-52 backdrop-blur-md bg-black/40 border border-white/10 hover:scale-105 transition cursor-pointer">
            <p className="text-yellow-400 font-bold text-3xl">What</p>
            <p className="text-white text-3xl font-semibold -mt-1">We Do</p>
          </div>

          {/* Tile 3 */}
          <div className="bg-[url('/assets/tile3.png')] bg-cover bg-center rounded-xl p-6 h-44 sm:h-52 backdrop-blur-md bg-black/40 border border-white/10 hover:scale-105 transition cursor-pointer">
            <p className="text-yellow-400 font-bold text-3xl">Why</p>
            <p className="text-white text-3xl font-semibold -mt-1">Choose Us</p>
          </div>

          {/* Tile 4 */}
          <div className="bg-[url('/assets/tile4.png')] bg-cover bg-center rounded-xl p-6 h-44 sm:h-52 backdrop-blur-md bg-black/40 border border-white/10 hover:scale-105 transition cursor-pointer">
            <p className="text-yellow-400 font-bold text-3xl">Our</p>
            <p className="text-white text-3xl font-semibold -mt-1">Strength</p>
          </div>

          {/* Tile 5 */}
          <div className="bg-[url('/assets/tile5.png')] bg-cover bg-center rounded-xl p-6 h-44 sm:h-52 backdrop-blur-md bg-black/40 border border-white/10 hover:scale-105 transition cursor-pointer">
            <p className="text-yellow-400 font-bold text-3xl">Our</p>
            <p className="text-white text-3xl font-semibold -mt-1">Goal</p>
          </div>
        </div>
      </div>

      {/* ---------------- MOVING MARQUEE STRIP ---------------- */}
      <div className="absolute bottom-0 left-0 w-full bg-black/85 py-3 z-20 overflow-hidden whitespace-nowrap flex items-center">
        <p className="text-white text-sm md:text-base font-medium animate-marquee inline-block">

          <span className="text-yellow-400 font-bold">India Infra Update:</span>  
          Growth in national construction and valuation demand continues upward.  
          &nbsp; | &nbsp;

          <span className="text-yellow-400 font-bold">Market Trends:</span>  
          NIFTY trading stable around <span className="text-blue-400 font-bold">25,919</span>.  
          &nbsp; | &nbsp;

          <span className="text-yellow-400 font-bold">Sector Insight:</span>  
          Engineering, BFSI & industrial valuation sectors show strong momentum.  
          &nbsp; | &nbsp;

          <span className="text-yellow-400 font-bold">AVI Consultants:</span>  
          Delivering trusted advisory excellence for 30+ years.
        </p>
      </div>

      {/* -------- KEYFRAMES FOR MARQUEE -------- */}
      <style>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
