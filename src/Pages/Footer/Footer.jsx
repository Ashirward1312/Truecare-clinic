import React from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Departments", to: "/departments" },
    { name: "Doctors", to: "/doctors" },
    { name: "Contact", to: "/contact" },
  ];

  const departments = [
    "Endocrinologist",
    "Cardiologist",
    "Dermatologist",
    "Gynecologist",
    "Paediatricians",
    "ENT",
    "Nephrology",
    "Neurologist",
    "Urologist",
    "Medicine",
    "Orthopedic",
    "General Physician",
    "Gastroenterology",
    "Dietician",
  ];

  return (
    <footer className="bg-[#0b1220] text-gray-300">

      {/* ✅ CTA STRIP */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-500 py-10 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Need Immediate Medical Assistance?
        </h3>
        <p className="text-teal-100 mb-5">
          Call us anytime. Our healthcare team is ready to assist you.
        </p>

        <a
          href="tel:9109102199"
          className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-7 py-3 rounded-full hover:shadow-lg transition"
        >
          <FiPhoneCall size={18} />
          9109102199
        </a>
      </div>

      {/* ✅ MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ✅ Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            TRUE <span className="text-teal-400">CARE</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Delivering trusted multispeciality healthcare with compassion,
            precision, and excellence.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-teal-400 mt-1" />
              <span>
                122–126, Upper Ground Floor,<br />
                Krishna Complex, Infront of Kutchery,<br />
                Raipur, Chhattisgarh
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiPhoneCall size={16} className="text-teal-400" />
              <span>9109102199</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-teal-400" />
              <span>truecareraipur@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={16} className="text-teal-400" />
              <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition"
                >
                  <ArrowRight size={14} />
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Departments (Split in 2 Columns) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Departments
          </h3>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {departments.map((dept) => (
              <li
                key={dept}
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition cursor-pointer"
              >
                <ArrowRight size={14} />
                {dept}
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Follow Us
          </h3>

          <p className="text-gray-400 text-sm mb-6">
            Stay connected for updates and health tips.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/True-Care-Clinic/61591198393539/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>

            <a
              href="https://www.instagram.com/truecareraipur?igsh=dXJjcXR5OGh4bHN6"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              <FaInstagram className="text-white text-sm" />
            </a>
          </div>
        </div>

      </div>

      {/* ✅ Bottom */}
      <div className="border-t border-slate-800 py-6 text-center text-xs text-gray-500 space-y-2">
        <p>
          © {new Date().getFullYear()} True Care Multispeciality Clinic, Raipur.
          All Rights Reserved.
        </p>

        <p>
          Designed & Developed by{" "}
          <a
            href="https://spadvertising.in/"
            target="_blank"
            rel="noreferrer"
            className="text-teal-400 hover:underline"
          >
            SP Advertising
          </a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;