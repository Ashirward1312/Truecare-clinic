import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our website, by calling our clinic directly, or by visiting us at our Raipur location.",
  },
  {
    question: "Do you provide emergency services?",
    answer:
      "Yes, our medical team is available for urgent care during working hours. For critical emergencies, please call us immediately.",
  },
  {
    question: "What departments are available at TrueCare?",
    answer:
      "We offer multiple specialties including Cardiology, Neurology, Orthopedics, Gynecology, Dermatology, ENT, Nephrology, and more.",
  },
 
  {
    question: "Where is the clinic located?",
    answer:
      "We are located at 122–126, Upper Ground Floor, Krishna Complex, Infront of Kutchery, Raipur, Chhattisgarh.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative pt-32 pb-28 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b1220] text-white overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* ✅ Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.35em] uppercase text-teal-400 font-semibold mb-6">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Got Questions?
            <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              We’ve Got Answers
            </span>
          </h2>
        </div>

        {/* ✅ FAQ Accordion */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-medium">
                  {item.question}
                </span>

                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-teal-400" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-400 text-sm leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Faq;