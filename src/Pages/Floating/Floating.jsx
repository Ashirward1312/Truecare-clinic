import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingSocial = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">

      {/* ✅ Facebook */}
      <motion.a
        href="https://www.facebook.com/people/True-Care-Clinic/61591198393539/"
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 5 }}
        className="group relative bg-[#1877F2] text-white p-4 rounded-r-2xl shadow-lg"
      >
        <FaFacebookF size={20} />
        <span className="absolute left-full ml-3 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Facebook
        </span>
      </motion.a>

      {/* ✅ Instagram */}
      <motion.a
        href="https://www.instagram.com/truecareraipur?igsh=dXJjcXR5OGh4bHN6"
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 5 }}
        className="group relative bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white p-4 rounded-r-2xl shadow-lg"
      >
        <FaInstagram size={20} />
        <span className="absolute left-full ml-3 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Instagram
        </span>
      </motion.a>

      {/* ✅ WhatsApp */}
      <motion.a
        href="https://wa.me/919109102199"
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 5 }}
        className="group relative bg-[#25D366] text-white p-4 rounded-r-2xl shadow-lg"
      >
        <FaWhatsapp size={20} />
        <span className="absolute left-full ml-3 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          WhatsApp
        </span>
      </motion.a>

    </div>
  );
};

export default FloatingSocial;