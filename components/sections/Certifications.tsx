"use client";

import { motion } from "framer-motion";
import { Code, Brain, ShieldCheck } from "lucide-react";

const expertiseAreas = [
  {
    title: "Full-Stack Web Development",
    description: "Building robust, scalable applications using Next.js, Node.js, MongoDB, and Express.",
    icon: <Code size={24} />,
  },
  {
    title: "System Design & Architecture",
    description: "Designing modular, maintainable, and high-performance backend systems.",
    icon: <Brain size={24} />,
  },
  {
    title: "Application Security & DevSecOps",
    description: "Integrating security into CI/CD pipelines and performing vulnerability assessments.",
    icon: <ShieldCheck size={24} />,
  },
];

export default function AreasOfExpertise() {
  return (
    <section
      id="expertise"
      className="relative py-20 px-6 lg:px-20 bg-surface text-text transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 text-accent glow"
        >
          Areas of Expertise
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px var(--color-glow)",
              }}
              className="group relative border border-base bg-[var(--color-base)]/40 rounded-2xl p-6 hover:border-[var(--color-accent)] transition-all duration-300 shadow-md cursor-pointer overflow-hidden"
            >
              {/* Glowing Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-[var(--color-accent)]/10 rounded-full mb-4 text-[var(--color-accent)]">
                {area.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-text mb-2">
                {area.title}
              </h3>
              <p className="text-secondary text-sm">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
