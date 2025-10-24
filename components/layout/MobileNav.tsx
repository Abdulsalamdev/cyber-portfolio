"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, FolderGit2, Briefcase, Mail, Twitter, Github } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: FolderGit2, href: "#projects" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Top bar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-surface border-b border-base flex justify-between items-center px-6 py-4 z-50 shadow-sm">
        <h1 className="text-xl font-semibold text-accent">Gabriel Odusanya</h1>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md bg-surface border border-base text-text hover:text-accent transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-surface border-t border-base flex flex-col items-center justify-center space-y-6 text-text z-40"
          >
            {navLinks.map(({ name, icon: Icon, href }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-lg text-secondary hover:text-accent transition-all duration-200 group"
              >
                <Icon size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>{name}</span>
              </Link>
            ))}

            {/* Social icons */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://x.com/gabbytech01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
              <Twitter   className="w-5 h-5 invert dark:invert-0 transition-all" />
              </a>

              <a
                href="https://github.com/cybergabby"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                   <Github className="w-5 h-5 invert dark:invert-0 transition-all" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
