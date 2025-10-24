"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Vulnerability Scanner",
    description:
      "Automated system that scans for OWASP Top 10 vulnerabilities and generates detailed reports.",
    tech: ["Python", "Nmap", "Flask"],
    github: "https://github.com/yourusername/vulnerability-scanner",
    demo: "#",
  },
  {
    title: "Network Intrusion Detector",
    description:
      "Machine learning-based IDS that detects and classifies network intrusions in real-time.",
    tech: ["TensorFlow", "Scikit-learn", "Wireshark"],
    github: "https://github.com/yourusername/network-ids",
    demo: "#",
  },
  {
    title: "Web Exploit Lab",
    description:
      "A simulated environment for practicing ethical hacking and penetration testing.",
    tech: ["Docker", "Node.js", "Next.js"],
    github: "https://github.com/yourusername/web-exploit-lab",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 lg:px-20 bg-[var(--color-surface)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-10 text-[var(--color-accent)]"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px var(--color-glow)",
              }}
              className="bg-[var(--color-base)] border border-[var(--color-base)] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-xl font-semibold mb-2 text-[var(--color-text)]">
                {project.title}
              </h3>
              <p className="text-[var(--color-secondary)] text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
