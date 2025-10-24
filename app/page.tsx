"use client";

import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { BackgroundMatrix } from "@/components/ui/BackgroundMatrix";


export default function HomePage() {
  return (
    <main className="relative min-h-screen text-gray-900 dark:text-gray-100 bg-white dark:bg-black">
      <BackgroundMatrix />
      <div className="relative z-10 space-y-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
   
      </div>
    </main>
  );
}
