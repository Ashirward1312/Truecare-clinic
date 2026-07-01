import React from "react";
import { motion } from "framer-motion";
import Logo from "../Header/Logo/logo.png";

const About = () => {
  return (
    <section id="about" className="relative py-36 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

        {/* ✅ LEFT SIDE – LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">

            {/* Subtle Background Shape */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-teal-50 to-cyan-50 rounded-[3rem]" />

            <img
              src={Logo}
              alt="TrueCare Logo"
              className="relative w-[340px] md:w-[420px] object-contain"
            />
          </div>
        </motion.div>

        {/* ✅ RIGHT SIDE – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Top Label */}
          <p className="text-sm tracking-[0.35em] uppercase text-teal-600 font-semibold mb-6">
            About Our Clinic
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-8">
            Excellence in Healthcare,
            <br />
            <span className="text-teal-600">
              Delivered with Integrity
            </span>
          </h2>

          {/* Accent Line */}
          <div className="w-20 h-[3px] bg-teal-600 mb-10 rounded-full" />

          {/* Premium Paragraph Block */}
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">

            <p>
              TrueCare Multispeciality Clinic stands as a symbol of trusted
              medical excellence. We provide comprehensive healthcare services
              supported by advanced technology, experienced specialists, and a
              patient-first approach that ensures comfort and clarity at every
              step.
            </p>

            <p>
              Our commitment extends beyond treatment. We focus on building
              long-term relationships based on transparency, ethical medical
              practice, and consistent quality care. Every patient who walks
              through our doors receives attention, respect, and personalized
              guidance tailored to their needs.
            </p>

            <p className="font-medium text-gray-800">
              At TrueCare, healthcare is not just a service — it is a promise of
              reliability, compassion, and excellence.
            </p>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;