"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/constants";

const HERO_FACTS = [
  { label: "Байршил", value: "Хялганат · Булган" },
  { label: "Зай", value: "Эрдэнэтээс ~56 км" },
  { label: "Улирал", value: "5–10 сар" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bark"
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
          className="object-cover scale-105"
        />
      </motion.div>

      {/* Layered overlays — forest tint, vignette, and bottom gradient */}
      <div className="absolute inset-0 bg-forest/20" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-bark/55 via-bark/10 to-bark/85"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.55)_100%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24"
      >
        {/* Location label */}
        <motion.p
          variants={itemVariants}
          className="eyebrow text-sand/80 justify-center mb-7"
        >
          {SITE.locationLabel}
        </motion.p>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(3rem,11vw,9rem)] font-semibold text-cream leading-[0.95] tracking-tight mb-7"
        >
          {SITE.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-display italic text-sand text-xl md:text-2xl lg:text-3xl mb-10 max-w-2xl mx-auto"
        >
          {SITE.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/accommodation"
            className="group inline-flex items-center gap-2 bg-ember hover:bg-ember-glow text-cream font-medium rounded-full pl-7 pr-6 py-3.5 text-sm sm:text-base transition-all duration-300 shadow-lg shadow-ember/30 hover:shadow-xl hover:shadow-ember/40 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Байрлал үзэх
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/20 backdrop-blur-sm border border-cream/30 text-cream font-medium rounded-full px-7 py-3.5 text-sm sm:text-base transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Захиалга өгөх
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-cream/10 bg-bark/30 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <dl className="grid grid-cols-3 gap-4 sm:gap-8">
            {HERO_FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <dt className="text-[0.65rem] sm:text-xs uppercase tracking-widest text-sand/55 font-body mb-1">
                  {fact.label}
                </dt>
                <dd className="font-display text-sand text-sm sm:text-base font-medium">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.25em] text-sand/50 font-body">
          Доош гүйлгэх
        </span>
        <motion.span
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-10 bg-sand origin-top"
        />
      </div>
    </section>
  );
}
