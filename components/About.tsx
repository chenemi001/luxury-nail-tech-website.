
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fffaf7] py-24 sm:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#f5cbd7]/30 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#aec7e2]/30 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:px-16">
        {/* Image composition */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[530px]"
        >
          {/* Decorative frame */}
          <div className="absolute -left-4 -top-4 h-full w-full rounded-tl-[180px] rounded-br-[180px] border border-[#d7b4c2] sm:-left-6 sm:-top-6" />

          {/* Model image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[180px] rounded-br-[180px] bg-[#aec7e2]">
            <Image
              src="/images/models/model-02.png"
              alt="Model showcasing elegant luxury nail artistry"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3d2434]/25 via-transparent to-white/10" />
          </div>

          {/* Floating decorative label */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -10, 0], rotate: [0, 2, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-7 -right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/70 bg-[#f5cbd7] text-center shadow-xl shadow-pink-900/10 sm:-right-8 sm:h-36 sm:w-36"
          >
            <Sparkles size={19} className="mb-1 text-[#a75d7a]" />
            <span className="font-display text-xl italic text-[#5a3547] sm:text-2xl">
              Made for
            </span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-[#744d5d]">
              Your beauty
            </span>
          </motion.div>

          {/* Small decorative circle */}
          <div className="absolute -right-3 top-16 h-5 w-5 rounded-full border border-[#c9a45c] bg-[#f5cbd7] sm:-right-8" />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 lg:pl-2"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#c9a45c]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#a66d83]">
              Our story
            </span>
          </motion.div>

          <h2 className="max-w-xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#211a20] sm:text-6xl lg:text-7xl">
            Beauty is in
            <br />
            <span className="italic text-[#d58ca7]">
              the details.
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-8 text-[#756a70] sm:text-base">
            Every set tells a story. We believe beautiful nails are more
            than an accessory; they're a little expression of who you are.
            From timeless elegance to bold designs, every detail is
            thoughtfully created just for you.
          </p>

          <p className="mt-5 max-w-lg text-sm leading-8 text-[#756a70] sm:text-base">
            Our studio is a space to slow down, feel confident and leave
            with nails that make you smile long after your appointment.
          </p>

          {/* Brand values */}
          <div className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-y border-[#e9d9df] py-6">
            {[
              { number: "01", label: "Bespoke designs" },
              { number: "02", label: "Luxury care" },
              { number: "03", label: "Your expression" },
            ].map((item) => (
              <div key={item.number} className="flex flex-col gap-2">
                <span className="font-display text-2xl italic text-[#d58ca7]">
                  {item.number}
                </span>
                <span className="text-[9px] font-medium uppercase leading-5 tracking-[0.13em] text-[#65565e] sm:text-[10px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#booking"
            whileHover={reduceMotion ? undefined : { x: 5 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="group mt-9 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#604454]"
          >
            <span className="border-b border-[#d58ca7] pb-2 transition-colors group-hover:border-[#604454]">
              Experience the difference
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5cbd7] transition-all duration-300 group-hover:bg-[#d58ca7] group-hover:text-white">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}