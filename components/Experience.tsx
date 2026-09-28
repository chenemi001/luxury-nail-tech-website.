
"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Gem } from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "The Consultation",
    description:
      "Every beautiful set begins with understanding your style, preferences and the look you want to achieve.",
    icon: Heart,
  },
  {
    number: "02",
    title: "The Artistry",
    description:
      "Your chosen design comes to life through careful preparation, creative detailing and attention to every nail.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "The Finishing Touch",
    description:
      "Enjoy the final details of your manicure and leave with nails that reflect your personal style.",
    icon: Gem,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#f8eeeb] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-5 block text-xs uppercase tracking-[0.35em] text-[#b58b80]">
            The Luxe experience
          </span>

          <h2 className="font-serif text-5xl font-normal leading-tight text-[#30211f] md:text-7xl">
            More than nails,
            <br />
            <span className="italic text-[#c18d96]">
              it's a ritual.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#806d69] md:text-base">
            A thoughtful approach to nail artistry, where creativity,
            personal style and attention to detail come together.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group border border-[#e8d5d0] bg-[#fdf8f6] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-10"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-serif text-2xl italic text-[#c18d96]">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4e4e1] text-[#b77e87] transition-colors duration-300 group-hover:bg-[#c18d96] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.4} />
                  </div>
                </div>

                <h3 className="mb-4 font-serif text-3xl text-[#30211f]">
                  {item.title}
                </h3>

                <p className="text-sm leading-8 text-[#806d69]">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-12 bg-[#c18d96] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}