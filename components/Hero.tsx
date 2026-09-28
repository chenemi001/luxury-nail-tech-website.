
"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useId, useRef } from "react";

/* --------------------------------
   FLOATING 3D HEART
--------------------------------- */

interface HeartProps {
  className?: string;
  size?: number;
  delay?: number;
  duration?: number;
  opacity?: number;
}

function FloatingHeart({
  className = "",
  size = 150,
  delay = 0,
  duration = 8,
  opacity = 1,
}: HeartProps) {
  const reduceMotion = useReducedMotion();
  const id = useId().replace(/:/g, "");

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ width: size, height: size, opacity }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -22, 4, -18, 0],
              x: [0, 8, -5, 5, 0],
              rotate: [0, 5, -4, 3, 0],
              scale: [1, 1.035, 0.98, 1.02, 1],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 200 190"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`heart-gradient-${id}`}
            x1="20"
            y1="0"
            x2="180"
            y2="190"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff8fc" />
            <stop offset=".38" stopColor="#f6b9cf" />
            <stop offset=".72" stopColor="#e995b5" />
            <stop offset="1" stopColor="#d777a0" />
          </linearGradient>

          <linearGradient
            id={`heart-shine-${id}`}
            x1="35"
            y1="15"
            x2="130"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity=".98" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <filter
            id={`heart-shadow-${id}`}
            x="-30%"
            y="-30%"
            width="160%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* Soft shadow */}
        <path
          d="M100 176 C85 161 13 112 13 60 C13 20 65 8 100 45 C135 8 187 20 187 60 C187 112 115 161 100 176Z"
          fill="#a94976"
          opacity=".28"
          filter={`url(#heart-shadow-${id})`}
          transform="translate(0 8)"
        />

        {/* Main heart */}
        <path
          d="M100 176 C85 161 13 112 13 60 C13 20 65 8 100 45 C135 8 187 20 187 60 C187 112 115 161 100 176Z"
          fill={`url(#heart-gradient-${id})`}
          stroke="#fff2f8"
          strokeWidth="2"
        />

        {/* Glossy highlights */}
        <path
          d="M33 57 C34 31 64 25 85 45"
          stroke={`url(#heart-shine-${id})`}
          strokeWidth="9"
          strokeLinecap="round"
          opacity=".95"
        />

        <path
          d="M113 37 C132 20 163 29 166 49"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          opacity=".85"
        />

        <path
          d="M31 88 C36 120 75 145 96 159"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".35"
        />
      </svg>
    </motion.div>
  );
}

/* --------------------------------
   FLOATING GLASS BUBBLE
--------------------------------- */

interface BubbleProps {
  className?: string;
  size?: number;
  delay?: number;
  duration?: number;
}

function FloatingBubble({
  className = "",
  size = 40,
  delay = 0,
  duration = 6,
}: BubbleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full border border-white/70 bg-gradient-to-br from-white/85 via-pink-200/70 to-pink-400/70 shadow-[inset_-5px_-7px_12px_rgba(176,71,125,0.16),0_8px_25px_rgba(91,54,94,0.12)] backdrop-blur-sm ${className}`}
      style={{ width: size, height: size }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -25, 5, -15, 0],
              x: [0, 8, -5, 4, 0],
              scale: [1, 1.08, 0.96, 1.04, 1],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="absolute left-[22%] top-[18%] h-[22%] w-[28%] rounded-full bg-white/95 blur-[1px]" />
      <span className="absolute bottom-[20%] right-[19%] h-[9%] w-[9%] rounded-full bg-white/90" />
    </motion.div>
  );
}

/* --------------------------------
   HERO COMPONENT
--------------------------------- */

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Gentle parallax effects while scrolling.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const decorationY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-16%"]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 0.8, 0]
  );

  const titleWords = ["YOUR", "NAILS.", "YOUR", "MOMENT."];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate min-h-[700px] h-[100svh] max-h-[1100px] overflow-hidden bg-[#a9c4e1] sm:min-h-[740px]"
    >
      {/* --------------------------------
          BACKGROUND
      --------------------------------- */}

      <div className="absolute inset-0 z-0 bg-[linear-gradient(115deg,#9cb9dc_0%,#b9cde6_48%,#f2c0d0_100%)]" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,255,255,.3),transparent_40%),linear-gradient(90deg,rgba(111,148,192,.15),transparent_65%)]" />

      {/* --------------------------------
          DECORATIVE GOLD RING
      --------------------------------- */}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[210px] top-[18%] z-[2] h-[440px] w-[440px] rounded-full border-[1.5px] border-[#e9cf91]/75 sm:-left-[260px] sm:h-[550px] sm:w-[550px]"
        animate={
          reduceMotion ? undefined : { rotate: 360 }
        }
        transition={{
          duration: 85,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* --------------------------------
          MODEL IMAGE
      --------------------------------- */}

      <motion.div
        style={{
          y: reduceMotion ? 0 : imageY,
        }}
        initial={
          reduceMotion
            ? false
            : { opacity: 0, scale: 1.04, x: 25 }
        }
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute bottom-0 left-[8%] right-[-12%] top-[7%] z-[5] sm:left-[16%] sm:right-[-7%] sm:top-[2%] lg:left-[21%] lg:right-[-3%] lg:top-[-3%]"
      >
        <Image
          src="/images/models/model-01.png"
          alt="Dark-skinned model showcasing luxury nail artistry"
          fill
          priority
          sizes="(max-width: 640px) 110vw, (max-width: 1024px) 90vw, 82vw"
          className="object-contain object-bottom"
        />
      </motion.div>

      {/* --------------------------------
          IMAGE BLENDING
      --------------------------------- */}

      <div className="pointer-events-none absolute inset-0 z-[6] bg-gradient-to-r from-[#a5c0df]/90 via-[#a5c0df]/30 to-transparent sm:via-[#a5c0df]/10" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[7] h-32 bg-gradient-to-t from-[#e9b7cb]/25 to-transparent" />

      {/* --------------------------------
          FLOATING DECORATIONS
      --------------------------------- */}

      <motion.div
        style={{
          y: reduceMotion ? 0 : decorationY,
        }}
        className="pointer-events-none absolute inset-0 z-[15]"
      >
        {/* Main glossy heart */}
        <FloatingHeart
          className="right-[3%] top-[22%] hidden lg:block"
          size={190}
          duration={8}
        />

        {/* Smaller floating hearts */}
        <FloatingHeart
          className="right-[12%] top-[54%] hidden sm:block"
          size={64}
          delay={1.5}
          duration={6}
          opacity={0.8}
        />

        <FloatingHeart
          className="left-[42%] top-[12%] hidden lg:block"
          size={44}
          delay={2.2}
          duration={7}
          opacity={0.65}
        />

        <FloatingHeart
          className="bottom-[15%] right-[35%] hidden xl:block"
          size={36}
          delay={0.7}
          duration={9}
          opacity={0.6}
        />

        {/* Glass bubbles */}
        <FloatingBubble
          className="right-[24%] top-[13%]"
          size={48}
          delay={0.5}
        />

        <FloatingBubble
          className="bottom-[19%] right-[6%] hidden sm:block"
          size={25}
          delay={1.2}
        />

        <FloatingBubble
          className="bottom-[27%] left-[4%]"
          size={110}
          delay={2.1}
          duration={7}
        />

        <FloatingBubble
          className="left-[39%] top-[38%] hidden lg:block"
          size={14}
          delay={0.8}
        />

        <FloatingBubble
          className="right-[42%] bottom-[12%] hidden lg:block"
          size={19}
          delay={1.8}
          duration={8}
        />
      </motion.div>

      {/* --------------------------------
          MAIN HERO CONTENT
      --------------------------------- */}

      <motion.div
        style={{
          y: reduceMotion ? 0 : textY,
          opacity: contentOpacity,
        }}
        className="relative z-[30] mx-auto flex h-full max-w-[1600px] items-center px-6 pb-16 pt-24 sm:px-10 lg:px-12"
      >
        <div className="w-full max-w-[440px] sm:max-w-[470px] lg:ml-[7%]">
          {/* Eyebrow */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-[#f4d5df]" />
            <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/95 sm:text-[10px]">
              The art of beautiful nails
            </span>
          </motion.div>

          {/* Animated headline */}
          <h1 className="font-display text-[clamp(4rem,9vw,8.5rem)] font-medium uppercase leading-[0.78] tracking-[-0.065em] text-white drop-shadow-[0_2px_12px_rgba(40,60,90,0.12)]">
            {titleWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="block overflow-hidden pb-[0.08em]"
              >
                <motion.span
                  initial={
                    reduceMotion
                      ? false
                      : { y: "110%", opacity: 0 }
                  }
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.45 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`block ${
                    index === 3
                      ? "italic text-[#f7d3de]"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-7 max-w-[310px] text-[10px] font-medium uppercase leading-[1.9] tracking-[0.22em] text-white/95 sm:mt-8 sm:text-xs"
          >
            Luxury nail artistry for women who love to stand out.
          </motion.p>

          {/* Booking button */}
          <motion.a
            href="#booking"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            whileHover={
              reduceMotion ? undefined : { scale: 1.055, y: -3 }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            className="group mt-8 inline-flex items-center gap-4 rounded-full border border-white/40 bg-[#f6d2dc] px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#51404a] shadow-[0_12px_35px_rgba(90,50,70,.15)] transition-colors duration-300 hover:bg-white sm:px-7 sm:py-[17px] sm:text-[10px]"
          >
            Book an appointment

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/60 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#d88ba9] group-hover:text-white">
              <ArrowRight size={15} />
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* --------------------------------
          RIGHT EDITORIAL TEXT
      --------------------------------- */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, x: 20 }
        }
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-[16%] right-[4%] z-[30] hidden max-w-[115px] text-[9px] uppercase leading-[2.1] tracking-[0.22em] text-white/90 xl:block"
      >
        <span className="block">Beauty</span>
        <span className="block">Confidence</span>
        <span className="block">Self expression</span>
        <span className="block">Always</span>
        <span className="mt-4 block h-px w-12 bg-white/70" />
      </motion.div>

      {/* --------------------------------
          SCROLL INDICATOR
      --------------------------------- */}

      <motion.a
        href="#services"
        initial={
          reduceMotion ? false : { opacity: 0 }
        }
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-7 left-6 z-[35] flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/90 sm:left-10 lg:left-12"
      >
        <motion.span
          animate={
            reduceMotion
              ? undefined
              : { y: [0, 6, 0] }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.span>

        <span>Scroll to explore</span>
        <span className="h-px w-12 bg-white/60 sm:w-24" />
      </motion.a>

      {/* Bottom highlight */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[40] h-20 bg-gradient-to-t from-[#e9bdcf]/25 to-transparent" />
    </section>
  );
}