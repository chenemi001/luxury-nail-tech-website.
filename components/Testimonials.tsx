
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Client One",
    service: "Nail service",
    review: "Replace this with a genuine review from a happy client.",
  },
  {
    name: "Client Two",
    service: "Custom nail art",
    review: "Add a real client's feedback about their nail experience.",
  },
  {
    name: "Client Three",
    service: "Manicure",
    review: "Feature an authentic review about the service received.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#fdf8f6] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-5 block text-xs uppercase tracking-[0.35em] text-[#b58b80]">
            The love notes
          </span>

          <h2 className="font-serif text-5xl font-normal text-[#30211f] md:text-7xl">
            Words from
            <span className="italic text-[#c18d96]"> our clients.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#806d69]">
            Real experiences and genuine feedback from clients
            who have enjoyed their nail appointments.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="border border-[#eadbd7] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-10"
            >
              <Quote
                size={30}
                strokeWidth={1.2}
                className="mb-7 text-[#c18d96]"
              />

              <div className="mb-5 flex gap-1 text-[#c18d96]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="min-h-24 font-serif text-xl italic leading-8 text-[#5c4642]">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-[#eadbd7] pt-5">
                <h3 className="font-medium text-[#30211f]">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#b58b80]">
                  {item.service}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}