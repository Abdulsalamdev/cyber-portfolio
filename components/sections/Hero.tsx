"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Penetration Tester",
  "Bug Bounty Hunter",
  "Threat Hunter",
  "Application Security Engineer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const title = titles[index];
    const interval = setInterval(() => {
      setDisplayText(title.slice(0, charIndex++));
      if (charIndex > title.length) {
        clearInterval(interval);
        setTimeout(() => setIndex((index + 1) % titles.length), 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-start min-h-screen px-6 lg:pl-72 bg-surface text-text transition-colors duration-300"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-2"
      >
        Hi, I’m{" "}
        <span className="text-accent glow">Gabriel Odusanya</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-secondary mt-4"
      >
        {displayText}
        <span className="animate-pulse text-accent">|</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 max-w-2xl text-secondary leading-relaxed"
      >
        I am a cybersecurity professional with expertise in penetration testing,
        bug bounty hunting, and threat hunting. I specialize in securing web,
        network, and API systems.
      </motion.p>

  <div className="mt-8 flex gap-4">
  <a
    href="#projects"
    className="bg-[var(--color-accent)] text-[var(--color-surface)] px-6 py-3 rounded-md font-semibold hover:shadow-[0_0_12px_var(--color-glow)] transition-all duration-300"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)] hover:shadow-[0_0_12px_var(--color-glow)] transition-all duration-300"
  >
    Contact Me
  </a>
</div>

    </section>
  );
}
