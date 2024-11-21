import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Dishes from "./components/assets/Dishes";
import About from "./components/assets/About";
import Misson from "./components/assets/Misson";
import Expertise from "./components/assets/Expertise";
import Review from "./components/assets/Review";
import Contact from "./components/assets/Contact";
import Footer from "./components/assets/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Restaura",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico", // Path to your favicon (supports .ico, .png, or .svg)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-hidden`}
      >
        <Hero />
        <Navbar />
        <Dishes />
        <About />
        <Misson />
        <Expertise />
        <Review />
        <Contact />
        <Footer />
        {children}
        
      
      </body>
    </html>
  );
}
