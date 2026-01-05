import React, { useState, useEffect, useRef } from "react";
import galleryData from "../data/galleryData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Classroom", "Events", "Activities"];

const Gallery = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const navigate = useNavigate();

  const images = Array.isArray(galleryData) ? galleryData : [];

  // 👉 FEATURED images for HOME page
  const featuredImages = images.slice(0, 4);

  const filteredImages =
    activeCategory === "All"
      ? featuredImages
      : featuredImages.filter((img) => img.category === activeCategory);

  /* ===== Intersection Observer ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== Animations ===== */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-delay.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="gallery"
        className="py-10 px-4 sm:px-8 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className={`text-center mb-12 reveal ${visible ? "show" : ""}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#E9F3FA] text-sm font-semibold text-[#3776BE] mb-4">
              Our Gallery
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2C40] mb-3">
              Moments at Aikyam School
            </h2>

            <p className="text-gray-600">
              A glimpse into joyful learning, play, and growth
            </p>
          </div>

          {/* FILTERS */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-10 reveal ${
              visible ? "show" : ""
            }`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#3776BE] text-white"
                    : "bg-white border border-[#E9F3FA] text-[#3776BE]"
                }`}>
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
                className={`cursor-pointer overflow-hidden rounded-[24px] shadow-lg hover:shadow-blue-300/40 transition reveal-delay ${
                  visible ? "show" : ""
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}>
                <img
                  src={img.src}
                  alt="Gallery"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* VIEW MORE */}
          <div className={`text-center mt-14 reveal ${visible ? "show" : ""}`}>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/gallery");
              }}
              className="px-6 py-3 rounded-[16px] font-medium text-white shadow-lg cursor-pointer"
              style={{
                background:
                  "linear-gradient(180deg, #4CA8FF 100%, #41D1B7 100%)",
                boxShadow:
                  "0px -8px 16px #FFFFFF7A inset, 0px 6px 20px #0000001A",
              }}>
              View More Images
            </button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white cursor-pointer">
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
            className="absolute left-6 text-white cursor-pointer">
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
            className="absolute right-6 text-white cursor-pointer">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
