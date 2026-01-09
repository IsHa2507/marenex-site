"use client";
import Button from "@/component/ui/button";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactInfoSection from "./Contactinfo";
export default function ContactUs() {
  return (
    <>
    <Navbar variant="light"/>
    <ContactInfoSection/>
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto  px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Map Section */}
        <div className="w-full h-[700px] rounded overflow-hidden shadow-lg">
          <iframe
            title="RG Mall Rohini"
            src="https://www.google.com/maps?q=RG%20Mall%20Sector-9%20Rohini%20Delhi&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded border border-gray-200  p-8">
          <h2 className="text-3xl font-light text-[#0b1c48] mb-2">Get In Touch</h2>
          <p className="text-gray-500 mb-6">Feel free to contact us</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone No</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Enter your message"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            
              <Button label="Send Message" />
            
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
