import React, { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Activity } from "lucide-react";


import Img1 from "../Hero/Images/Hero.jpeg";
import Img2 from "../Hero/Images/Hero2.jpeg";
import Img3 from "../Hero/Images/Hero3.jpeg";
import Img4 from "../Hero/Images/Hero4.jpeg";


const images = [Img1, Img2, Img3, Img4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Slider */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Healthcare"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[4000ms] ease-linear ${index === current
            ? "opacity-100 scale-110"
            : "opacity-0 scale-125"
            }`}
        />
      ))}

      {/* Softer Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/35 to-slate-900/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

      {/* Soft Teal Accent Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-teal-400/10 blur-[160px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl text-white">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full text-xs tracking-widest uppercase text-gray-200 mb-10">
            <ShieldCheck size={16} className="text-teal-300" />
            Trusted Multispeciality Clinic
          </div>

          {/* Heading */}

          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold leading-[1.05] tracking-tight">

            <span className="text-white">
              TRUE
            </span>{" "}

            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              CARE
            </span>

            <span className="mt-5 flex items-center justify-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold">

              <Activity className="h-8 w-8 text-teal-300" />

              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-transparent">
                Care For Life
              </span>

              <Activity className="h-8 w-8 text-teal-300" />

            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Compassionate care powered by innovation, advanced diagnostics,
            and highly experienced medical professionals dedicated to your wellbeing.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <button className="px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-xl transition duration-300 shadow-[0_8px_25px_rgba(20,184,166,0.25)]">
              Book Appointment
            </button>

            <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition duration-300">
              View Services
            </button>
          </div>

        </div>
      </div>



    </section>
  );
};

export default Hero;