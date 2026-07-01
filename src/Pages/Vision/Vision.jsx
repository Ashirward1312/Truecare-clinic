import React from "react";
import { motion } from "framer-motion";
import { Eye, Globe, Sparkles } from "lucide-react";

const Vision = () => {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* ✅ Label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.35em] uppercase text-teal-600 font-semibold mb-6"
        >
          Our Vision
        </motion.p>

        {/* ✅ Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-8"
        >
          Shaping the Future of
          <span className="block text-teal-600">
            Advanced & Compassionate Healthcare
          </span>
        </motion.h1>

        {/* ✅ Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
        >
          Our vision at TrueCare Multispeciality Clinic is to become a trusted
          leader in modern healthcare by delivering innovative medical solutions,
          fostering compassionate care, and building a healthier community
          through excellence and integrity.
        </motion.p>

      </div>

      {/* ✅ Vision Highlights */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
            <Eye className="text-teal-600" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Visionary Leadership
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To continuously evolve and lead with innovation, ensuring the highest
            standards of healthcare delivery and patient satisfaction.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
            <Globe className="text-teal-600" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Community Impact
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To promote awareness, preventive healthcare, and accessible medical
            services that positively impact the health of our community.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
            <Sparkles className="text-teal-600" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Continuous Innovation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To integrate advanced medical technologies and evidence-based
            practices that redefine excellence in patient care.
          </p>
        </motion.div>

      </div>

      {/* ✅ Closing Statement */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 mt-24 text-center">
        <p className="text-gray-700 text-lg font-medium leading-relaxed">
          Our vision inspires us to build a future where healthcare is not only
          accessible and innovative but also deeply human-centered and
          trustworthy.
        </p>
      </div>

    </section>
  );
};

export default Vision;