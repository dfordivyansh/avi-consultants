import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:aikyampreschool@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* ===== Animations ===== */}
      <style>{`
        .contact-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .contact-reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="contact"
        className="py-10 px-4 sm:px-8 lg:px-16 bg-[#F4F9FF]"
      >
        <div className="max-w-7xl mx-auto">

          {/* ================= HEADER ================= */}
          <div
            className={`text-center mb-10 contact-reveal ${
              visible ? "show" : ""
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#E9F3FA] text-sm font-semibold text-[#3776BE] mb-3">
              Contact Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2C40] mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-600">
              We’d love to hear from you. Get in touch with Aikyam School.
            </p>
          </div>

          {/* ================= CONTENT GRID ================= */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch contact-reveal ${
              visible ? "show" : ""
            }`}
          >
            {/* ================= MAP ================= */}
            <div className="rounded-[24px] overflow-hidden shadow-md border border-[#E9F3FA]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1782.6454998627307!2d78.387039326845!3d17.354262937676026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97af033e7301%3A0x3cf62a14c9a024d6!2sAikyam%20Preschool!5e0!3m2!1sen!2sin!4v1767630304411!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "340px" }}   // 👈 reduced height
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aikyam Preschool Location"
              />
            </div>

            {/* ================= CONTACT FORM ================= */}
            <div className="bg-white rounded-[24px] shadow-md shadow-blue-200/40 p-6 sm:p-8 border border-[#E9F3FA]">
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#1C2C40] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3776BE]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#1C2C40] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3776BE]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-[#1C2C40] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3776BE]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#1C2C40] mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3776BE]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full text-white font-medium px-6 py-3 rounded-[14px] shadow-lg text-sm sm:text-base cursor-pointer transition hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(180deg, #4CA8FF 100%, #41D1B7 100%)",
                    boxShadow:
                      "0px -6px 14px #FFFFFF7A inset, 0px 6px 18px #0000001A",
                  }}
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
