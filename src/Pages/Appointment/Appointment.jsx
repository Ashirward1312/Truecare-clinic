import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const BookAppointmentModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ✅ Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* ✅ Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ✅ Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-gray-500 hover:text-gray-800"
              >
                <X size={22} />
              </button>

              {/* ✅ Success Screen */}
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={60} className="text-teal-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Appointment Booked!
                  </h3>
                  <p className="text-gray-500 mt-3">
                    Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* ✅ Heading */}
                  <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                    Book Appointment
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Fill the form below and our team will get back to you.
                  </p>

                  {/* ✅ Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    <select
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedic</option>
                      <option>Dermatology</option>
                      <option>General Physician</option>
                    </select>

                    <input
                      type="date"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition"
                    >
                      Confirm Appointment
                    </button>

                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookAppointmentModal;