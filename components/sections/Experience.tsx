"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Cybersecurity Instructor – Web Application Security [Contract]",
    company: "Cloud Mavin's Cybersecurity Academy",
    duration: "Aug 2024 – Present",
    description: [
      "Delivering hands-on Web Application Security training to students.",
      "Designed lab challenges for vulnerability exploitation.",
      "Guided students through secure development practices and AppSec fundamentals.",
    ],
  },
  {
    role: "Security Research & Penetration Testing Services",
    company: "Freelance",
    duration: "Mar 2024 – Present",
    description: [
      "Provided security consulting for various industries.",
      "Reported vulnerabilities like ATO, IDOR, and 2FA bypass to startups.",
      "Conducted private penetration testing for fintech and transport APIs.",
    ],
  },
  {
    role: "CyberSecurity Intern – Web Application Penetration Tester",
    company: "Hacktify Cyber Security",
    duration: "Jul 2024 – Aug 2024",
    description: [
      "Performed penetration testing on live web applications.",
      "Identified vulnerabilities (XSS, SQLi, CSRF, IDOR).",
      "Collaborated on CTF challenges and penetration test reporting.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 px-6 lg:px-20 bg-[var(--color-surface)] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 text-[var(--color-accent)]"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-[var(--color-accent)]/30 ml-4 lg:ml-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-10 ml-6"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[10px] flex items-center justify-center w-5 h-5 bg-[var(--color-accent)] rounded-full shadow-[0_0_10px_var(--color-glow)]" />

              <div className="bg-[var(--color-base)] border border-[var(--color-base)] hover:border-[var(--color-accent)]/50 p-6 rounded-xl shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-[var(--color-text)]">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-[var(--color-secondary)] italic">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-[var(--color-accent)] mt-1">{exp.company}</p>

                <ul className="mt-3 list-disc list-inside space-y-1 text-[var(--color-secondary)]">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
