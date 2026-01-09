"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { footerQuickLinks } from "@/component/links";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#061a3a] to-[#020b1e] text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

        {/* Brand Info */}
        <div>
          <Image
            src="/logo/logo-white.png"
            alt="Marenex Services"
            width={200}
            height={60}
            className="mb-6"
          />
          <p className="text-sm leading-relaxed text-gray-400">
            Marenex Services is a trusted provider of marine electronic
            equipment, automation, and calibration solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm">
            {footerQuickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 hover:text-orange-400 transition"
                >
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition" />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Official Info</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-400 mt-1" />
              <span>1st Floor, Shop No-145, R. G Mall, Sector-9, Rohini, West Delhi, India-110085</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-400" />
              <a href="tel:+919211369292" className="hover:text-orange-400 transition">+91 9211369292</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-400" />
              <a href="mailto:technical@marenexservices.com" className="hover:text-orange-400 transition">technical@marenexservices.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-400" />
              <a href="mailto:info@marenexservices.com" className="hover:text-orange-400 transition">info@marenexservices.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p className="text-center md:text-left">© 2025 marenexservices.com. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-orange-400 transition">Terms of Use</Link>
          <span className="opacity-40">|</span>
          <Link href="#" className="hover:text-orange-400 transition">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
