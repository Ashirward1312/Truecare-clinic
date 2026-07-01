import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b1220] text-white overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute -top-24 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ✅ Heading */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.35em] uppercase text-teal-400 font-semibold mb-6">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Get in Touch with
            <span className="block mt-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
              TrueCare Clinic
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
            We are here to assist you with appointments, consultations, and any
            healthcare inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ✅ Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: <FiPhoneCall size={22} />,
                title: "Phone",
                details: ["Mobile: 9109102199", "Tel: 07714032199"],
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                details: ["truecareraipur@gmail.com"],
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                details: [
                  "122 to 126, Upper Ground Floor",
                  "Krishna Complex",
                  "Infront of Kutchery",
                  "Raipur, Chhattisgarh",
                ],
              },
              {
                icon: <FaClock />,
                title: "Working Hours",
                details: ["Mon - Sat: 9:00 AM - 8:00 PM"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-start bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  {item.details.map((d, i) => (
                    <p key={i} className="text-gray-400 text-sm">
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* ✅ Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10"
          >
            {submitted && (
              <div className="absolute inset-0 bg-[#0f172a]/95 flex flex-col items-center justify-center rounded-3xl z-10">
                <FaCheckCircle className="text-5xl text-teal-400 mb-4" />
                <h3 className="text-2xl font-semibold">Message Sent!</h3>
                <p className="text-gray-400 mt-2">
                  We'll contact you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 focus:border-teal-500 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 focus:border-teal-500 outline-none"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 focus:border-teal-500 outline-none"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 focus:border-teal-500 outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Your Message"
                className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 focus:border-teal-500 outline-none resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-teal-500/30"
              >
                Send Message <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* ✅ Map */}
        <div className="mt-20 rounded-3xl overflow-hidden border border-white/10 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7078.928971323216!2d81.62989399019168!3d21.247047364271488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd98d3fc54f9%3A0xd820d43127f07528!2sKrishna%20Complex!5e1!3m2!1sen!2sin!4v1782891270069!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale hover:grayscale-0 transition duration-500"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;