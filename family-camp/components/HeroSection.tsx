"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/2.png"
          alt="Булган аймгийн тал хээр, уул ба ойн агаараас харсан үзэмж"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay — light forest tint to harmonize with the greens, strong bottom gradient for text contrast */}
      <div className="absolute inset-0 bg-forest/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/75" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Location label */}
        <motion.p
          variants={itemVariants}
          className="text-sand/70 tracking-widest text-xs sm:text-sm uppercase mb-6 font-body"
        >
          {SITE.locationLabel}
        </motion.p>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-cream leading-tight mb-6"
        >
          {SITE.name}
        </motion.h1>

        {/* Mongolian tagline */}
        <motion.p
          variants={itemVariants}
          className="font-display italic text-sand text-xl md:text-2xl lg:text-3xl mb-3"
        >
          {SITE.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants}>
          <Link
            href="/accommodation"
            className="inline-block bg-ember hover:bg-ember/80 text-cream font-medium rounded-full px-8 py-3.5 text-base transition-colors duration-200 shadow-lg shadow-ember/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Дэлгэрэнгүй харах
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-sand/60"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
