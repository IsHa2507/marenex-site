"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/logo-nav.png" // Replace with your logo path
            alt="Marenex Logo"
            width={70}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-200"
            }`}
          >
            Home
          </a>
          <a
            href="#"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-200"
            }`}
          >
            About
          </a>
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-200"
              } flex items-center space-x-1`}
            >
              <span>Services</span>
            </button>

            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-40 bg-white rounded-md shadow-lg text-gray-800"
              >
                {["Logistics", "Shipping", "Tracking"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          
          <a
            href="#"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-200"
            }`}
          >
            Product
          </a>
          <a
            href="#"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-200"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            className={`px-4 py-2 rounded border text-sm font-medium transition ${
              scrolled ? "border-gray-300 text-gray-800" : "border-white text-white"
            }`}
          >
            Register
          </button>
          <button className="px-4 py-2 rounded bg-blue-900 text-white text-sm font-medium hover:bg-blue-700">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 w-full shadow-md">
          <a href="#" className="block px-6 py-3 hover:bg-gray-100">
            Home
          </a>

          {/* Services Mobile Dropdown */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left px-6 py-3 hover:bg-gray-100 flex justify-between items-center"
            >
              Services
              <span>{servicesOpen ? "-" : "+"}</span>
            </button>
            {servicesOpen &&
              ["Logistics", "Shipping", "Tracking"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-12 py-2 hover:bg-gray-100"
                >
                  {item}
                </a>
              ))}
          </div>

          <a href="#" className="block px-6 py-3 hover:bg-gray-100">
            About
          </a>
          <a href="#" className="block px-6 py-3 hover:bg-gray-100">
            Product
          </a>
          <a href="#" className="block px-6 py-3 hover:bg-gray-100">
            Contact
          </a>

          <div className="flex flex-col px-6 py-3 space-y-2">
            <button className="px-4 py-2 rounded border border-gray-300 text-gray-800">
              Register
            </button>
            <button className="px-4 py-2 rounded bg-blue-900 text-white hover:bg-blue-700">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
