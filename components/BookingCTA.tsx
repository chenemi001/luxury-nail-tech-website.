
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MessageCircle, Sparkles } from "lucide-react";

const bookingSteps = [
  {
    icon: Sparkles,
    title: "Choose your service",
    description: "Explore the nail services and find your perfect set.",
  },
  {
    icon: CalendarDays,
    title: "Pick your preferred date",
    description: "Let us know when you'd like to book your appointment.",
  },
  {
    icon: MessageCircle,
    title: "Confirm your booking",
    description: "Get in touch to discuss availability and confirm your visit.",
  },
];

export default function BookingCTA() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#30211f] px-6 py-24 text-[#fdf8f6] md:px-12 md:py-32"
    >
      <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full border border-[#c18d96]/20" />
      <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#c18d96]/20" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#c18d96]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 block text-xs uppercase tracking-[0.35em] text-[#d6a9ad]">
            Your moment awaits
          </span>

          <h2 className="font-serif text-5xl font-normal leading-tight md:text-7xl">
            Your next
            <br />
            <span className="italic text-[#d6a9ad]">
              nail obsession.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-8 text-[#e2cfcb]/75 md:text-base">
            Ready for a fresh set? Start your booking journey and
            let us help you find the perfect look.
          </p>

          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-4 bg-[#d6a9ad] px-7 py-4 text-sm font-medium text-[#30211f] transition-all duration-300 hover:bg-[#f0d5d5]"
          >
            Book your appointment
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-8"
        >
          {bookingSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex gap-5 border-b border-white/15 pb-8 last:border-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6a9ad]/50 text-[#d6a9ad]">
                  <Icon size={20} strokeWidth={1.4} />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#d6a9ad]">
                    Step 0{index + 1}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#e2cfcb]/70">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}