"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const bg = theme === "dark" ? "#0a0a0a" : "#fdfdfd";
  const text = theme === "dark" ? "#e5e5e5" : "#111111";
  const accent = theme === "dark" ? "#00ffcc" : "#0077ff";

  // Sidebar colors based on theme
  const sidebarBg = theme === "dark"
    ? "bg-gradient-to-br from-[#121212] via-[#1F1F2F] to-[#3D3D70]"
    : "bg-gradient-to-br from-[#ffffff] via-[#e0e0e0] to-[#cfd8dc]"; // light visible gradient
  const sidebarText = theme === "dark" ? accent : "#0077ff";

  return (
    <header className="fixed top-0 w-full z-50">
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6"
        style={{ background: bg }}
      >
        {/* Logo */}
        <Link href="/" className="text-lg font-bold" style={{ color: accent }}>
          Gabby Tech
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#00ffcc] transition-colors"
              style={{ color: text }}
            >
              {link.label}
            </a>
          ))}

          <motion.button
            onClick={toggleTheme}
            whileHover={{ rotate: 90 }}
            className="ml-4 p-2 rounded-full border"
            style={{ borderColor: accent, color: accent }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ rotate: 90 }}
            className="p-2 rounded-full border"
            style={{ borderColor: accent, color: accent }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </motion.button>

          {open ? (
            <button onClick={() => setOpen(false)}>
              <X className="w-6 h-6" style={{ color: text }} />
            </button>
          ) : (
            <button onClick={() => setOpen(true)}>
              <Menu className="w-6 h-6" style={{ color: text }} />
            </button>
          )}
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {open && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
              />

              {/* Sidebar Panel on RIGHT */}
              <motion.div
                className={`fixed top-0 right-0 h-full w-3/4 z-40 p-6 shadow-lg flex flex-col ${sidebarBg}`}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                {/* Cancel Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className={`p-2 rounded-full hover:bg-opacity-10 transition-colors`}
                  >
                    <X size={24} color={sidebarText} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-6 mt-6">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium hover:text-[#00ffcc]"
                      style={{ color: sidebarText }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-auto justify-end">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Github color={sidebarText} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <Linkedin color={sidebarText} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <Twitter color={sidebarText} />
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
