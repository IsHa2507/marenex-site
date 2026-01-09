"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaQuestionCircle,
  FaEnvelope,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa";

// ───── SERVICES LIST ─────
export const servicesList = [
  { title: "Repair & Programming", slug: "repair-programming" },
  { title: "GMDSS Radio Survey", slug: "gmdss-radio-survey" },
  { title: "VDR Annual Survey", slug: "vdr-annual-survey" },
  { title: "Magnetic Compass Calibration", slug: "magnetic-compass-calibration" },
  { title: "Calibration Services", slug: "calibration-services" },
  { title: "Marine Services", slug: "marine-services" },
];

// ───── TYPES ─────
type NavbarProps = {
  variant?: "default" | "light";
};

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(variant === "light");
  const [menuOpen, setMenuOpen] = useState(false);

  // ───── SCROLL LOGIC (HOME ONLY) ─────
  useEffect(() => {
    if (variant === "light") return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const isLight = scrolled || variant === "light";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className={`transition-all duration-300 ${isLight ? "bg-white shadow-md" : "bg-transparent"}`}>
        
        {/* ───── TOP UTILITY BAR ───── */}
        <div className={`hidden md:block w-screen border-b ${isLight ? "border-gray-200" : "border-white/20"}`}>
          <div className={`max-w-7xl mx-auto flex justify-end gap-6 px-6 py-2 text-xs ${isLight ? "text-black" : "text-white"}`}>
            <NavIcon icon={<FaGlobe size={12} />} label="EN" />
            <NavIcon icon={<FaQuestionCircle size={12} />} label="Support" />
            <NavIcon icon={<FaEnvelope size={12} />} label="Contact Us" />
          </div>
        </div>

        {/* ───── MAIN NAVBAR ───── */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Image src="/logo/nav-logo.svg" alt="Marenex Logo" width={150} height={50} />

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 ${isLight ? "text-black" : "text-white"}`}>
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <Link href="/about" className="hover:text-orange-400">About</Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-400">
                Services
                <FaChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full mt-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white text-black rounded-xl shadow-xl p-2 z-50">
                {servicesList.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services?type=${service.slug}`}
                    className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-sm font-medium"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/products" className="hover:text-orange-400">Product</Link>
            <Link href="/blog" className="hover:text-orange-400">Blog</Link>
          </nav>

          {/* Mobile Menu Icon */}
          <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden ${isLight ? "text-black" : "text-white"}`}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* ───── MOBILE MENU ───── */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-3">
          <Link href="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block" onClick={() => setMenuOpen(false)}>About</Link>

          {/* SERVICES LINKS DYNAMIC */}
          {servicesList.map((service) => (
            <Link
              key={service.slug}
              href={`/services?type=${service.slug}`}
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {service.title}
            </Link>
          ))}

          <Link href="/products" className="block" onClick={() => setMenuOpen(false)}>Product</Link>
          <Link href="/blog" className="block" onClick={() => setMenuOpen(false)}>Blog</Link>
        </div>
      )}
    </header>
  );
}

// ───── REUSABLE ICON ─────
function NavIcon({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:opacity-70">
      {icon}
      <span>{label}</span>
    </div>
  );
}

