"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 lg:px-20 bg-surface text-text transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-8 text-accent glow"
        >
          Contact
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-secondary leading-relaxed text-lg mb-10"
        >
          Feel free to reach out to me for collaborations, bug bounty programs,
          or security consultations.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-secondary">
            <span className="font-semibold text-text">Twitter (X):</span>{" "}
            <a
              href="https://x.com/gabbytech01"
              target="_blank"
              className="text-accent hover:underline transition-colors"
            >
              @Gabriel Odusanya
            </a>
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href="https://github.com/cybergabby"
            target="_blank"
            className="p-3 rounded-full bg-[var(--color-base)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)] transition-all duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://x.com/gabbytech01"
            target="_blank"
            className="p-3 rounded-full bg-[var(--color-base)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)] transition-all duration-300"
          >
            <Twitter size={22} />
          </a>
          <a
            href="mailto:gabbytechsec@gmail.com"
            className="p-3 rounded-full bg-[var(--color-base)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)] transition-all duration-300"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
