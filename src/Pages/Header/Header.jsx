import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoImg from "./Logo/hii.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Departments", href: "/departments" },
    // { name: "Doctors", href: "/doctors" },
    { name: "Contact", href: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `relative font-semibold uppercase text-sm tracking-wide transition duration-300 group ${
      isActive ? "text-teal-600" : "text-slate-700 hover:text-teal-600"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={LogoImg}
            alt="TrueCare Logo"
            className="h-20 md:h-22 lg:h-24 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              className={linkClass}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-600 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </NavLink>
          ))}
        </nav>

        {/* ✅ CTA + Mobile */}
        <div className="flex items-center gap-4">

          {/* 🔥 Premium CTA */}
          <NavLink to="/contact" className="hidden md:inline-flex">
            <button className="items-center px-8 py-3 rounded-full font-semibold text-white 
            bg-gradient-to-r from-teal-600 to-cyan-500 
            hover:from-teal-700 hover:to-cyan-600 
            transition-all duration-300 
            shadow-lg hover:shadow-2xl hover:-translate-y-0.5">
              Book Appointment
            </button>
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg border-b border-slate-200 pb-2 transition font-medium ${
                  isActive ? "text-teal-600" : "text-slate-700 hover:text-teal-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full mt-4 px-6 py-3 rounded-full font-semibold text-white 
            bg-gradient-to-r from-teal-600 to-cyan-500 
            hover:from-teal-700 hover:to-cyan-600 
            transition-all duration-300 shadow-md">
              Book Appointment
            </button>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;