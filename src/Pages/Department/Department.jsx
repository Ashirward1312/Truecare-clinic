import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Baby,
  Ear,
  Bone,
  Stethoscope,
  Activity,
  Droplet,
  ShieldPlus,
  User,
  Apple,
  CheckCircle2,
} from "lucide-react";

/* ---------------- SERVICES WITH MORE DETAILS ---------------- */

const services = [
  {
    name: "Endocrinologist",
    icon: Activity,
    color: "#0ea5e9",
    bg: "from-sky-100 to-blue-100",
    desc: "Advanced diagnosis and long-term management of hormonal and metabolic disorders.",
    points: ["Diabetes Care", "Thyroid Treatment", "Hormone Therapy"],
  },
  {
    name: "Cardiologist",
    icon: HeartPulse,
    color: "#ef4444",
    bg: "from-rose-100 to-red-100",
    desc: "Comprehensive cardiac services using modern diagnostic and interventional technology.",
    points: ["ECG & Echo", "Heart Surgery", "Preventive Cardiology"],
  },
  {
    name: "Dermatologist",
    icon: Droplet,
    color: "#ec4899",
    bg: "from-pink-100 to-rose-100",
    desc: "Complete skin, hair and cosmetic dermatology care.",
    points: ["Skin Treatment", "Laser Therapy", "Cosmetic Care"],
  },
  {
    name: "Gynecologist",
    icon: User,
    color: "#a855f7",
    bg: "from-purple-100 to-violet-100",
    desc: "Comprehensive women’s healthcare and maternity services.",
    points: ["Pregnancy Care", "Infertility Treatment", "Women Wellness"],
  },
  {
    name: "Paediatricians",
    icon: Baby,
    color: "#f59e0b",
    bg: "from-amber-100 to-yellow-100",
    desc: "Compassionate and specialized care for infants and children.",
    points: ["Child Immunization", "Growth Monitoring", "Neonatal Care"],
  },
  {
    name: "ENT",
    icon: Ear,
    color: "#8b5cf6",
    bg: "from-violet-100 to-fuchsia-100",
    desc: "Comprehensive care for ear, nose, throat, and head & neck conditions.",
    points: ["Hearing Tests", "Sinus Treatment", "Throat Surgery"],
  },
  {
    name: "Nephrology",
    icon: Droplet,
    color: "#0284c7",
    bg: "from-cyan-100 to-sky-100",
    desc: "Expert care for kidney diseases, hypertension, and dialysis.",
    points: ["Dialysis Care", "Kidney Stones", "Hypertension"],
  },
  {
    name: "Neurologist",
    icon: Brain,
    color: "#6366f1",
    bg: "from-indigo-100 to-blue-100",
    desc: "Advanced diagnosis and treatment for brain and nervous system disorders.",
    points: ["Stroke Care", "Headache Clinic", "Epilepsy Treatment"],
  },
  {
    name: "Urologist",
    icon: Activity,
    color: "#059669",
    bg: "from-emerald-100 to-teal-100",
    desc: "Specialized care for urinary tract and male reproductive system disorders.",
    points: ["Prostate Care", "Urinary Stones", "Men's Health"],
  },
  {
    name: "Medicine",
    icon: ShieldPlus,
    color: "#4f46e5",
    bg: "from-indigo-100 to-violet-100",
    desc: "Comprehensive internal medicine care for adults of all ages.",
    points: ["Chronic Illness", "Preventive Care", "Health Screening"],
  },
  {
    name: "Orthopedic",
    icon: Bone,
    color: "#f97316",
    bg: "from-orange-100 to-amber-100",
    desc: "Advanced bone and joint treatments with rehabilitation support.",
    points: ["Joint Replacement", "Fracture Care", "Sports Injury"],
  },
  {
    name: "General physician",
    icon: Stethoscope,
    color: "#10b981",
    bg: "from-emerald-100 to-green-100",
    desc: "Primary healthcare services including diagnosis and treatment of everyday illnesses.",
    points: ["Fever & Colds", "Routine Checkups", "Health Counseling"],
  },
  {
    name: "Gastroenterology",
    icon: Activity,
    color: "#d97706",
    bg: "from-amber-100 to-orange-100",
    desc: "Expert management of digestive system and gastrointestinal disorders.",
    points: ["Endoscopy", "Liver Care", "Acid Reflux"],
  },
  {
    name: "Dietician",
    icon: Apple,
    color: "#84cc16",
    bg: "from-lime-100 to-green-100",
    desc: "Personalized nutrition plans and dietary counseling for a healthier lifestyle.",
    points: ["Weight Management", "Clinical Diet", "Nutritional Therapy"],
  },
];

/* ---------------- FAST ICON ---------------- */

const FastIcon = ({ Icon, color, bg }) => {
  return (
    <div className="relative w-16 h-16 transition-transform duration-200 ease-out group-hover:scale-105 will-change-transform">
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${bg} opacity-40`}
      />
      <div className="absolute inset-0 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
        <Icon size={28} style={{ color: color }} />
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

const PremiumMedicalServices = () => {
  return (
    <section id="departments" className="relative py-36 bg-slate-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 px-6 py-2 rounded-full text-xs tracking-widest uppercase text-teal-600 mb-6 font-semibold shadow-sm">
            Excellence in Healthcare
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 tracking-tight leading-tight">
            Our <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Medical Departments</span>
          </h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering excellence in multispeciality healthcare with advanced
            technology and compassionate specialists.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
               <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group will-change-transform"
              >
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm group-hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  {/* Top Accent */}
                  <div
                    className="absolute top-0 left-0 w-full h-2 rounded-t-3xl opacity-80"
                    style={{ backgroundColor: service.color }}
                  />

                  <FastIcon
                    Icon={Icon}
                    color={service.color}
                    bg={service.bg}
                  />

                  <h3 className="text-xl font-semibold text-gray-800 mt-6">
                    {service.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="mt-6 space-y-2 flex-grow">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2
                          size={16}
                          className="mr-2"
                          style={{ color: service.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button
                    className="mt-6 py-2.5 rounded-xl text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 will-change-transform text-white shadow-sm"
                    style={{ backgroundColor: service.color }}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PremiumMedicalServices;