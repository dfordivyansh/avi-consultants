import React, { useEffect, useRef, useState } from "react";
import {
  HeartHandshake,
  Brain,
  Users,
  School,
} from "lucide-react";

/* Right-side cards data */
const features = [
  {
    icon: <Users />,
    title: "Child-Centered Approach",
    description:
      "We focus on individual growth and development, tailoring learning to each child’s unique needs.",
  },
  {
    icon: <Brain />,
    title: "Holistic Development",
    description:
      "Our curriculum nurtures cognitive, emotional, social, and physical growth.",
  },
  {
    icon: <HeartHandshake />,
    title: "Experienced Teachers",
    description:
      "Passionate educators with years of experience in early childhood education.",
  },
  {
    icon: <School />,
    title: "State-of-the-Art Facilities",
    description:
      "Modern classrooms, interactive tools, and safe play areas for optimal learning.",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

  const backgroundStyle = {
    backgroundColor: "#F4F9FF",
    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(173, 216, 230, 0.45) 1px, transparent 0)`,
    backgroundSize: "26px 26px",
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ===== Animations ===== */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-delay.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="about"
        className="py-10 px-4 sm:px-8 lg:px-16"
        style={backgroundStyle}
      >
        <div className="max-w-7xl mx-auto">

          {/* ================= MAIN HEADING ================= */}
          <div className={`text-center mb-16 reveal ${visible ? "show" : ""}`}>
            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-white border border-[#E9F3FA] text-sm font-semibold text-[#3776BE] shadow-sm">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C2C40]">
              Building Foundations for
              <span className="block text-[#3776BE]">Lifelong Learning</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ================= LEFT COLUMN ================= */}
            <div className={`lg:pr-12 reveal ${visible ? "show" : ""}`}>

              <span className="inline-block px-4 py-2 mb-6 rounded-full bg-white border border-[#E9F3FA] text-sm font-semibold text-[#3776BE] shadow-sm">
                <i className="fa-solid fa-book-open mr-2"></i>
                Our Story
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold text-[#1C2C40] mb-6 leading-tight">
                A Journey of Passion,
                <br />
                Dedication & Excellence
              </h3>

              <div className="flex items-start gap-3 mb-6">
                <i className="fa-solid fa-landmark text-xl text-[#4794EB] mt-1"></i>
                <div>
                  <h4 className="text-lg font-bold text-[#1C2C40] mb-1">
                    Our History
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Founded with a vision to create a nurturing space where every
                    child feels valued, supported, and inspired to grow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <i className="fa-solid fa-bullseye text-xl text-[#4794EB] mt-1"></i>
                <div>
                  <h4 className="text-lg font-bold text-[#1C2C40] mb-1">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    To provide exceptional early education that fosters curiosity,
                    creativity, and lifelong learning in a supportive environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-10">
                <i className="fa-solid fa-heart text-xl text-[#4794EB] mt-1"></i>
                <div>
                  <h4 className="text-lg font-bold text-[#1C2C40] mb-1">
                    Our Values
                  </h4>
                  <p className="text-gray-600">
                    Excellence, Integrity, Compassion, Innovation, and Community
                  </p>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="text-white font-medium px-6 py-3 rounded-[16px] shadow-lg text-sm sm:text-base cursor-pointer transition hover:scale-[1.05]"
                style={{
                  background:
                    "linear-gradient(180deg, #4CA8FF 100%, #41D1B7 100%)",
                  boxShadow:
                    "0px -8px 16px 0px #FFFFFF7A inset, 0px 6px 20px 0px #0000001A",
                }}
              >
                Message Us
              </button>
            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold text-[#1C2C40] mb-8 reveal ${visible ? "show" : ""}`}>
                Why Choose Aikyam?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`relative bg-white p-6 rounded-[24px] shadow-lg shadow-blue-200/40 
                    hover:shadow-blue-400/50 transition transform lg:rotate-[3deg]
                    reveal-delay ${visible ? "show" : ""}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div
                      className="absolute inset-0 rounded-[24px] pointer-events-none"
                      style={{
                        padding: "1px",
                        background:
                          "linear-gradient(135deg, #003182 0%, #00E9CD 100%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    ></div>

                    <div
                      className="p-3 rounded-full w-fit mb-4"
                      style={{
                        background:
                          "linear-gradient(315deg, #00CCA6 0%, #2892E9 56%)",
                      }}
                    >
                      {React.cloneElement(feature.icon, {
                        className: "w-6 h-6 text-white",
                        strokeWidth: 2,
                      })}
                    </div>

                    <h4 className="text-lg font-bold text-[#1C2C40] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
