import React, { useState, useEffect } from "react";
import galleryData from "../data/galleryData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const categories = ["All Images", "Classroom", "Events", "Activities"];

const FullGallery = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All Images");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);

  const images = Array.isArray(galleryData) ? galleryData : [];

  /* ===== HERO SLIDER IMAGES ===== */
  const heroImages = images.slice(0, 5); // top large images

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    if (heroImages.length === 0) return;

    const interval = setInterval(() => {
      setHeroIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  /* ===== FILTER ===== */
  const filteredImages =
    activeCategory === "All Images"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* ===== HERO SLIDER ===== */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt="Gallery Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
              index === heroIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md
          px-5 py-2 rounded-full font-semibold text-[#1C2C40]
          shadow-lg hover:scale-105 transition cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>
          Back to Home
        </button>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div className="text-white px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3">
              Aikyam School Gallery
            </h1>
            <p className="text-white/90 text-lg">
              Capturing moments of learning, joy & growth
            </p>
          </div>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section className="py-12 px-4 sm:px-8 bg-[#F4F9FF] min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#3776BE] text-white"
                    : "bg-white border border-[#E9F3FA] text-[#3776BE]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="cursor-pointer overflow-hidden rounded-[24px]
                shadow-lg hover:shadow-blue-300/40 transition"
              >
                <img
                  src={img.src}
                  alt="Gallery"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===== LIGHTBOX ===== */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white cursor-pointer"
            >
              <X size={32} />
            </button>

            <button
              onClick={() =>
                setLightboxIndex(
                  lightboxIndex === 0
                    ? filteredImages.length - 1
                    : lightboxIndex - 1
                )
              }
              className="absolute left-6 text-white cursor-pointer"
            >
              <ChevronLeft size={40} />
            </button>

            <img
              src={filteredImages[lightboxIndex].src}
              alt="Preview"
              className="max-w-[90%] max-h-[80vh] rounded-xl"
            />

            <button
              onClick={() =>
                setLightboxIndex(
                  lightboxIndex === filteredImages.length - 1
                    ? 0
                    : lightboxIndex + 1
                )
              }
              className="absolute right-6 text-white cursor-pointer"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default FullGallery;
