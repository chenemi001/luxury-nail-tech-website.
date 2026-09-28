
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  {
    number: "01",
    name: "Acrylic Extensions",
    category: "THE SIGNATURE SET",
    description:
      "Beautifully sculpted extensions, designed to complement your style, from timeless elegance to statement nails.",
    image: "/images/models/model-01.png",
    accent: "#f5cbd7",
    duration: "60–120 MIN",
  },
  {
    number: "02",
    name: "Gel Manicure",
    category: "THE EVERYDAY LUXE",
    description:
      "A flawless, glossy finish with carefully curated colours for effortlessly polished nails.",
    image: "/images/models/model-02.png",
    accent: "#aec7e2",
    duration: "45–75 MIN",
  },
  {
    number: "03",
    name: "Custom Nail Art",
    category: "THE ARTISTIC SET",
    description:
      "Unique designs, intricate details and personalised nail art inspired by your imagination.",
    image: "/images/models/model-03.png",
    accent: "#e9c4d2",
    duration: "60–150 MIN",
  },
  {
    number: "04",
    name: "BIAB Nails",
    category: "THE NATURAL LOOK",
    description:
      "A beautifully understated manicure focused on a polished appearance and natural-looking nails.",
    image: "/images/models/model-01.png",
    accent: "#d9e5f0",
    duration: "45–90 MIN",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fffaf7] py-24 sm:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-[#aec7e2]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#f5cbd7]/30 blur-[110px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a45c]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#a66d83]">
                The experience
              </span>
            </div>

            <h2 className="font-display text-6xl font-medium leading-[0.9] tracking-[-0.045em] text-[#211a20] sm:text-7xl lg:text-8xl">
              A little luxury.
              <br />
              <span className="italic text-[#d58ca7]">
                A lot of you.
              </span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-7 text-[#756a70] sm:text-base">
              From everyday elegance to statement-making nail art,
              discover a service designed to make every detail feel special.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.22em] text-[#a66d83]">
              <Sparkles size={15} />
              Your nails, your signature
            </div>
          </div>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.number}
              variants={cardVariants}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="group relative flex flex-col overflow-hidden rounded-t-[160px] border border-[#eadde1] bg-white shadow-[0_12px_40px_rgba(83,56,69,0.04)] transition-shadow duration-500 hover:shadow-[0_25px_55px_rgba(83,56,69,0.12)]"
            >
              {/* Image */}
              <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{ backgroundColor: service.accent }}
              >
                <Image
                  src={service.image}
                  alt={`${service.name} nail service`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 25vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2532]/35 via-transparent to-white/10" />

                {/* Service number */}
                <span className="absolute left-5 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/20 text-[10px] tracking-widest text-white backdrop-blur-md">
                  {service.number}
                </span>

                {/* Floating icon */}
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: [0, -6, 0], rotate: [0, 5, 0] }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Number(service.number) * 0.3,
                  }}
                  className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/30 text-white shadow-lg backdrop-blur-md"
                >
                  <Sparkles size={16} />
                </motion.div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col px-6 pb-7 pt-7">
                <span className="mb-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#b47c93]">
                  {service.category}
                </span>

                <h3 className="font-display text-3xl font-medium leading-tight text-[#211a20] transition-colors duration-300 group-hover:text-[#c67f9e]">
                  {service.name}
                </h3>

                <p className="mt-4 flex-1 text-xs leading-6 text-[#756a70]">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#eee3e7] pt-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#a89ba1]">
                      Approx. duration
                    </span>
                    <span className="text-[9px] font-medium tracking-[0.12em] text-[#51404a]">
                      {service.duration}
                    </span>
                  </div>

                  <motion.a
                    href="#booking"
                    whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                    aria-label={`Book ${service.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5cbd7] text-[#684657] transition-colors duration-300 hover:bg-[#d58ca7] hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#ecdce2] bg-[#f8e8ed]/60 px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left"
        >
          <div>
            <p className="font-display text-3xl italic text-[#684657] sm:text-4xl">
              Your next nail obsession starts here.
            </p>
            <p className="mt-2 text-xs text-[#756a70]">
              Ready for a little self-care?
            </p>
          </div>

          <motion.a
            href="#booking"
            whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#211a20] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#b87994]"
          >
            Book your appointment
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}