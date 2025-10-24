
"use client";

import { motion } from "framer-motion";

const skills = [
  "Security Research",
  "API Security",
  "Web Application Penetration Testing",
  "Mobile Application Penetration Testing",
  "Application Security Engineering",
];

const certifications = [
  "Certified Application Security Practitioner (CAP)",
  "API Penetration Tester",
  "Information Security Management System (ISO/IEC 27001)",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 lg:pl-72 py-20 bg-surface text-text transition-colors duration-300"
    >
      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 glow">
          About Me
        </h2>

        <p className="max-w-3xl leading-relaxed text-secondary mb-6">
          I am a passionate cybersecurity professional with 4 years of experience in securing digital assets and protecting organizations from cyber threats. My journey began with curiosity about how systems work and how they can be exploited — this curiosity led me to specialize in ethical hacking and application security.
        </p>

        <p className="max-w-3xl leading-relaxed text-secondary mb-6">
          I thrive in challenging environments where I can identify vulnerabilities, design secure systems, and educate teams on secure coding and best practices. I believe in continuous learning, staying ahead of emerging threats, and contributing to the cybersecurity community through blogs, open-source projects, and mentorship.
        </p>

        <p className="max-w-3xl leading-relaxed text-secondary">
          My mission is to make the digital world a safer place by continuously improving my skills and helping others do the same.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold text-accent mb-4 glow">
          Areas of Expertise
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-[var(--color-base)]/40 dark:bg-[var(--color-base)]/30 px-4 py-2 rounded-lg border border-[var(--color-base)] hover:border-[var(--color-accent)] hover:shadow-[0_0_6px_var(--color-accent)] transition-all duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold text-accent mb-4 glow">
          Certifications
        </h3>
        <ul className="space-y-3">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="flex items-center gap-3 text-secondary transition-colors"
            >
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full shadow-[0_0_6px_var(--color-accent)]"></span>
              {cert}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
