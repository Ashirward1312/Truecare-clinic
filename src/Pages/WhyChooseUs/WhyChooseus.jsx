import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Medical Expertise",
    desc: "Our experienced specialists deliver accurate diagnosis and evidence-based treatments with the highest ethical standards.",
  },
  {
    icon: Stethoscope,
    title: "Advanced Technology",
    desc: "Equipped with modern diagnostic tools and clinical systems to ensure precision and efficiency in patient care.",
  },
  {
    icon: HeartPulse,
    title: "Compassionate Care",
    desc: "We prioritize patient comfort, empathy, and clear communication at every stage of treatment.",
  },
  {
    icon: Clock,
    title: "Timely & Efficient Service",
    desc: "Streamlined appointment scheduling and minimal waiting time for a smooth healthcare experience.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    desc: "Collaborative healthcare approach with experts across multiple specialties working together.",
  },
  {
    icon: Sparkles,
    title: "Modern & Hygienic Facility",
    desc: "Clean, safe, and welcoming environment designed to meet the highest medical safety standards.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">

      {/* Soft background shapes */}
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-teal-100/60 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-[400px] h-[400px] bg-cyan-100/60 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ✅ Heading */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold uppercase tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            Why Choose Us
          </div>

          <h2 className="mt-7 text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
            Excellence That
            <span className="block text-transparent bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-400 bg-clip-text">
              Sets Us Apart
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            We combine experienced specialists, advanced medical technology, and
            compassionate patient care to deliver exceptional healthcare with
            trust, precision, and excellence.
          </p>

        </div>

        {/* ✅ Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 h-full">

                  {/* Subtle top gradient line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-3xl" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:from-teal-500 group-hover:to-cyan-500 transition duration-300">
                    <Icon
                      size={26}
                      className="text-teal-600 group-hover:text-white transition duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;