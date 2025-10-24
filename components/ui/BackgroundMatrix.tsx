// "use client";

// import { useEffect, useRef } from "react";

// export function BackgroundMatrix() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const letters = "010101011001110011";
//     const fontSize = 16;
//     const drops: number[] = [];

//     const resize = () => {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       const columns = Math.floor(canvas.width / fontSize);
//       drops.length = 0;
//       for (let i = 0; i < columns; i++) drops[i] = 1;
//     };

//     resize();

//     const draw = () => {
//       if (!ctx) return;

//       const isDark = document.documentElement.classList.contains("dark");
//       ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = isDark ? "#00FFFF" : "#000000"; // neon blue for dark, black for light
//       ctx.font = `${fontSize}px 'Poppins', monospace`;

//       for (let i = 0; i < drops.length; i++) {
//         const text = letters[Math.floor(Math.random() * letters.length)];
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);
//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
//           drops[i] = 0;
//         drops[i]++;
//       }
//     };

//     const interval = setInterval(draw, 33);
//     window.addEventListener("resize", resize);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none"
//     />
//   );
// }

"use client";

import { useEffect, useRef } from "react";

export function BackgroundMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const letters = "010101011001110011";
    const fontSize = 16;
    const drops: number[] = [];

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(canvas.width / fontSize);
      drops.length = 0;
      for (let i = 0; i < columns; i++) drops[i] = 1;
    };

    resize();

    const draw = () => {
      if (!ctx) return;

      const isDark = document.documentElement.classList.contains("dark");

      // Background fade (lighter for overlay)
      ctx.fillStyle = isDark
        ? "rgba(0, 0, 0, 0.05)"
        : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = isDark ? "#00FFFF" : "#111827"; // neon for dark, black for light
      ctx.font = `${fontSize}px 'Poppins', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
          drops[i] = 0;
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    window.addEventListener("resize", resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none opacity-30"
    />
  );
}
