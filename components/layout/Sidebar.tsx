"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, FolderGit2, Briefcase, Mail, Twitter, Github } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: FolderGit2, href: "#projects" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex flex-col justify-between fixed top-0 left-0 h-screen w-64 bg-surface border-r border-base px-6 py-10 text-text z-50 shadow-sm transition-colors duration-300"
    >
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-accent mb-1 glow transition-colors duration-300">
          Gabriel Odusanya
        </h1>
        <p className="text-sm text-secondary">Cybersecurity Professional</p>
      </div>

      {/* Navigation */}
      <nav className="mt-10 space-y-3">
        {navLinks.map(({ name, icon: Icon, href }) => (
      <Link
  key={name}
  href={href}
  className="flex items-center gap-3 px-3 py-2 rounded-md text-secondary transition-all duration-300 group
    hover:text-[var(--color-accent)]
    hover:bg-[color:rgba(0,102,255,0.1)]
    dark:hover:bg-[color:rgba(0,255,255,0.1)]
    hover:shadow-[inset_0_0_0_1px_rgba(0,102,255,0.4)]
    dark:hover:shadow-[0_0_8px_var(--color-glow)]
    active:scale-[0.97]"
>
  <Icon
    size={20}
    className="group-hover:translate-x-1 transition-transform duration-200"
  />
  <span className="font-medium">{name}</span>
</Link>

        ))}
      </nav>

      {/* Footer */}
      <div className="flex justify-between items-center mt-10">
        <ThemeToggle />
        <div className="flex gap-4 items-center">
          <a
            href="https://x.com/gabbytech01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Twitter className="w-5 h-5 transition-all" />
          </a>
          <a
            href="https://github.com/cybergabby"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5 transition-all" />
          </a>
        </div>
      </div>
    </motion.aside>
  );
}
