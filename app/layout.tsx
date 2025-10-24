import "./globals.css";
import { Poppins } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Gabriel Odusanya | Cybersecurity Portfolio",
  description:
    "Cybersecurity Professional skilled in Penetration Testing, Bug Bounty, and Threat Hunting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider>
          <Sidebar />
          <MobileNav />
          <div className="lg:ml-64 transition-all duration-300">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
