import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Cardiac Care Patient",
    review:
      "From consultation to recovery, the entire experience was seamless. The doctors were attentive, transparent, and extremely professional.",
  },
  {
    name: "Priya Verma",
    role: "Dermatology Patient",
    review:
      "The clinic environment is modern and calming. I felt heard, understood, and truly cared for throughout my treatment journey.",
  },
  {
    name: "Amit Singh",
    role: "Orthopedic Patient",
    review:
      "Exceptional care and advanced facilities. The medical team ensured I was confident and comfortable every step of the way.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b1220] overflow-hidden text-white">

      {/* Premium Glow Effects */}
      <div className="absolute -top-32 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* ✅ Premium Heading */}
        <div className="mb-20">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-teal-400 text-sm font-semibold tracking-wide uppercase backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Patient Experiences
          </span>

          <h2 className="mt-8 text-4xl md:text-5xl font-semibold leading-tight">
            Trusted Care.
            <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Proven Excellence.
            </span>
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-8 rounded-full" />

        </div>

        {/* ✅ Slider */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
            >
              <div className="flex flex-col items-center">

                {/* Quote */}
                <Quote size={42} className="text-teal-400 mb-6 opacity-80" />

                {/* Review */}
                <p className="text-gray-300 leading-relaxed text-lg max-w-2xl">
                  “{testimonials[index].review}”
                </p>

                {/* Stars */}
                <div className="flex mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Name */}
                <div className="mt-6">
                  <h4 className="font-semibold text-white">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonials[index].role}
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* ✅ Premium Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-16 -translate-y-1/2 bg-white/10 border border-white/20 backdrop-blur-md shadow-lg rounded-full p-4 hover:bg-teal-500 hover:border-teal-500 transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-16 -translate-y-1/2 bg-white/10 border border-white/20 backdrop-blur-md shadow-lg rounded-full p-4 hover:bg-teal-500 hover:border-teal-500 transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;