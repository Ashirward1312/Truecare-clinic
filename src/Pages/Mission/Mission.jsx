import React from "react";
import { motion } from "framer-motion";
import { Target, HeartHandshake, ShieldCheck } from "lucide-react";

const Mission = () => {
  return (
    <section className="relative pt-32 pb-28 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b1220] text-white overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* ✅ Label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.35em] uppercase text-teal-400 font-semibold mb-6"
        >
          Our Mission
        </motion.p>

        {/* ✅ Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
        >
          Committed to Excellence in
          <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            Compassionate Healthcare
          </span>
        </motion.h1>

        {/* ✅ Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed"
        >
          At TrueCare Multispeciality Clinic, our mission is to deliver
          high-quality, patient-centered healthcare built on trust, innovation,
          and compassion. We combine advanced medical technology with ethical
          clinical practices to ensure accurate diagnosis, effective treatment,
          and long-term wellness for every individual.
        </motion.p>
      </div>

      {/* ✅ Mission Highlights */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)] transition-all duration-300"
        >
          <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
            <Target className="text-teal-400" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Precision & Innovation
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We integrate advanced diagnostic tools and modern medical
            technologies to ensure precise and reliable healthcare solutions.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)] transition-all duration-300"
        >
          <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
            <HeartHandshake className="text-teal-400" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Compassionate Care
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Our patients are at the heart of everything we do. We provide
            personalized care with empathy, respect, and transparency.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)] transition-all duration-300"
        >
          <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="text-teal-400" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Trust & Integrity
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We maintain the highest ethical standards in medical practice,
            building long-term relationships based on trust and reliability.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default Mission;