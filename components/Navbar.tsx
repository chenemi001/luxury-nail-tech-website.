
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/30 bg-[#aec7e2]/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-12">
        {/* Logo */}
        <a href="#home" aria-label="Luxe Nails home" className="group relative z-10">
          <span className="block font-display text-[38px] font-semibold leading-none tracking-[-0.07em] text-white transition-transform duration-500 group-hover:scale-105 sm:text-[44px]">
            LUXE
          </span>
          <span className="mt-1 block pl-1 text-[9px] tracking-[0.48em] text-white/90">
            N A I L S
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-10">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.09, duration: 0.5 }}
              className="group relative py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#f5cbd7] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-2 rounded-full border border-white/40 bg-[#f5cbd7] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#55444c] shadow-lg shadow-pink-950/10 transition-colors hover:bg-white"
          >
            Book now
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-x-0 top-0 -z-10 min-h-screen bg-[#9ebcda] px-8 pb-12 pt-32 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="border-b border-white/30 pb-4 font-display text-5xl text-white"
                >
                  {link.label}
                </motion.a>
              ))}

              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-between rounded-full bg-[#f5cbd7] px-7 py-5 text-sm uppercase tracking-widest text-[#55444c]"
              >
                Book an appointment
                <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}