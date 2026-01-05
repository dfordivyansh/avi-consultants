import React, { useEffect, useRef, useState } from "react";
import { Baby, Puzzle, Heart, Brain, Users, Home } from "lucide-react";

/* External font loader */
const FontLoader = () => (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap"
  />
);

const programs = [
  { icon: <Baby />, title: "Toddler", age: "1.5 – 2.5 years" },
  { icon: <Puzzle />, title: "Play Group", age: "2.5 – 3 years" },
  { icon: <Heart />, title: "Nursery", age: "3 – 4 years" },
  { icon: <Brain />, title: "LKG", age: "4 – 5 years" },
  { icon: <Users />, title: "UKG", age: "5 – 6 years" },
  { icon: <Home />, title: "Daycare", age: "All ages" },
];

const OurPhilosophy = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ===== Intersection Observer ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FontLoader />

      {/* ===== Smooth Animation Styles ===== */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 0.7s ease,
                      transform 0.7s ease;
        }

        .reveal-delay.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="our-philosophy"
        className="bg-gradient-to-b from-[#E9F3FA] via-[#F7FBFF] to-white py-14 px-4"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">

          {/* ================= HEADER ================= */}
          <div className={`text-center max-w-4xl mx-auto mb-20 reveal ${visible ? "show" : ""}`}>
            <p className="inline-block text-[#3776BE] text-xs sm:text-sm px-4 py-1 mb-6 rounded-full border border-[#3776BE]/40 bg-white shadow-sm">
              Our Philosophy
            </p>

            <h2 className="text-[#104D9D] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Nurturing Every Child’s
              <br />
              <span
                className="font-light italic text-[#3776BE]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Unique Potential
              </span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              At <b>Beginners World</b>, we believe in nurturing every child’s
              unique potential through a{" "}
              <b>play-based, multisensory approach</b>. Our curriculum fosters
              creativity, curiosity, and a lifelong love of learning—ensuring
              development of{" "}
              <b>social, emotional, cognitive, and motor skills</b>.
            </p>
          </div>

          {/* ================= PROGRAMS TITLE ================= */}
          <div className={`text-center mb-14 reveal ${visible ? "show" : ""}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#104D9D] mb-2">
              Early Years Programs
            </h3>
            <p className="text-gray-600">
              Designed for holistic growth at every stage
            </p>
          </div>

          {/* ================= PROGRAM CARDS ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-2 sm:px-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`reveal-delay ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className="bg-white/90 backdrop-blur-md border border-[#3776BE]/20
                  rounded-[20px] shadow-md shadow-blue-200/30
                  hover:shadow-blue-400/40 hover:-translate-y-1
                  transition aspect-square flex flex-col justify-center items-center
                  text-center p-4"
                >
                  {React.cloneElement(program.icon, {
                    className: "text-[#4794EB] mb-2",
                    size: 32,
                    strokeWidth: 2,
                  })}

                  <h4 className="text-sm sm:text-base font-bold text-[#104D9D]">
                    {program.title}
                  </h4>

                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    {program.age}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default OurPhilosophy;
