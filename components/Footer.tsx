
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Heart } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f8eeeb] px-6 pt-20 md:px-12 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-[#e5d3ce] pb-16 md:grid-cols-3 md:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="inline-block">
              <span className="block font-serif text-4xl tracking-[0.15em] text-[#30211f]">
                LUXE
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.5em] text-[#b58b80]">
                N A I L S
              </span>
            </a>

            <p className="mt-7 max-w-xs text-sm leading-8 text-[#806d69]">
              Where creativity meets elegance. Discover
              nail artistry designed to express your
              individual style.
            </p>
          </motion.div>

          {/* Navigation */}
          <div>
            <h3 className="mb-7 text-xs uppercase tracking-[0.3em] text-[#b58b80]">
              Explore
            </h3>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-1 text-sm text-[#55413e] transition-colors duration-300 hover:text-[#c18d96]"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Booking */}
          <div>
            <h3 className="mb-7 text-xs uppercase tracking-[0.3em] text-[#b58b80]">
              Your next appointment
            </h3>

            <p className="mb-7 max-w-xs text-sm leading-8 text-[#806d69]">
              Ready for your next set? Start your booking
              journey and let us create something beautiful.
            </p>

            <a
              href="#booking"
              className="group inline-flex items-center gap-3 bg-[#30211f] px-6 py-4 text-xs uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#c18d96]"
            >
              Book now
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              aria-label="Contact us"
              className="mt-6 flex w-fit items-center gap-2 text-sm text-[#806d69] transition-colors hover:text-[#c18d96]"
            >
              <Camera size={17} />
              Follow our work
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs tracking-wide text-[#806d69]">
            © {new Date().getFullYear()} Luxe Nails. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-[#806d69]">
            Made with
            <Heart
              size={13}
              className="fill-[#c18d96] text-[#c18d96]"
            />
            for beautiful nails.
          </p>

          <a
            href="#home"
            className="text-xs uppercase tracking-[0.2em] text-[#806d69] transition-colors hover:text-[#c18d96]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}