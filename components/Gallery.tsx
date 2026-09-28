
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  { src: "/images/nails/nail-01.jpg", label: "Pink Perfection" },
  { src: "/images/nails/nail-02.webp", label: "Soft Elegance" },
  { src: "/images/nails/nail-03.jpg", label: "The Classic" },
  { src: "/images/nails/nail-04.jpg", label: "Artistry" },
  { src: "/images/nails/nail-05.jpg", label: "French Affair" },
  { src: "/images/nails/nail-06.jpg", label: "Golden Touch" },
  { src: "/images/nails/nail-07.jpg", label: "Modern Muse" },
  { src: "/images/nails/nail-08.jpg", label: "Nail Obsession" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="overflow-hidden bg-[#fdf8f6] py-24 md:py-32"
    >
      <div className="mx-auto mb-14 max-w-7xl px-6 md:mb-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.35em] text-[#b58b80]">
              The art of beautiful nails
            </span>

            <h2 className="font-serif text-5xl font-normal leading-tight text-[#30211f] md:text-7xl">
              A little gallery
              <br />
              <span className="italic text-[#c18d96]">
                of obsession.
              </span>
            </h2>
          </div>

          <a
            href="#booking"
            className="group flex w-fit items-center gap-3 border-b border-[#c18d96] pb-2 text-sm tracking-wide text-[#30211f] transition-colors hover:text-[#c18d96]"
          >
            Book your experience
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fdf8f6] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fdf8f6] to-transparent md:w-28" />

        <motion.div
          className="flex w-max gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex shrink-0 gap-5"
              aria-hidden={set === 1}
            >
              {galleryImages.map((item, index) => (
                <motion.div
                  key={`${set}-${item.src}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="group relative w-[260px] shrink-0 md:w-[340px]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#f0e6e2]">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      sizes="(max-width: 768px) 260px, 340px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                      <div>
                        <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-serif text-2xl italic">
                          {item.label}
                        </h3>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="mb-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#9c7771]">
          Every set tells a story
        </p>
      </div>
    </section>
  );
}