"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ICON_PROPS = {
  className: "w-7 h-7",
  fill: "none" as const,
  viewBox: "0 0 24 24",
  stroke: "currentColor" as const,
  strokeWidth: 1.4,
  "aria-hidden": true,
};

const FEATURES: Feature[] = [
  {
    title: "Цэвэр байгаль",
    description: "Гэмтээгдээгүй монгол нутаг дэвсгэр, цэнгэг ой моднын агаар.",
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4 0-7-3-7-7 0-3 2-5 4-6-1-3 1-6 3-6 3 0 4 3 3 6 2 1 4 3 4 6 0 4-3 7-7 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-9" />
      </svg>
    ),
  },
  {
    title: "Жинхэнэ гэр буудал",
    description: "Уламжлалт монгол гэр болон шовгор майхан, бодит туршлага.",
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M5 20l7-13 7 13M9 20v-5h6v5M12 3v4" />
      </svg>
    ),
  },
  {
    title: "Гэр бүлд тохиромжтой",
    description: "Бүх насны хүмүүст тохирсон, тайвшралтай орчин.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20c0-3 3-5 6-5s6 2 6 5M14 20c0-2.2 1.8-4 3.5-4S21 17.8 21 20" />
      </svg>
    ),
  },
  {
    title: "Одтой тэнгэр",
    description: "Гэрлийн бохирдолгүй, шөнийн тэнгэр од дүүрэн.",
    icon: (
      <svg {...ICON_PROPS}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 4l.7 1.6L19.3 6.3 17.7 7l-.7 1.6L16.3 7l-1.6-.7L16.3 5.6 17 4z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-forest py-24 md:py-32 overflow-hidden">
      {/* Subtle radial highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,213,176,0.08)_0%,_transparent_60%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="eyebrow text-sand/65 justify-center mb-4">Онцлог</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-sand max-w-2xl mx-auto">
            Яагаад Family Camp?
          </h2>
          <p className="text-sand/60 mt-5 font-body max-w-xl mx-auto">
            Хотын чимээ шуугианаас ангид, байгальд бүрэн уусах хэдэн шалтгаан.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {FEATURES.map((feature, i) => (
            <motion.article
              key={feature.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="relative bg-gradient-to-b from-forest-deep/60 to-forest-deep/30 border border-sand/15 rounded-2xl p-7 cursor-default backdrop-blur-sm overflow-hidden group"
            >
              {/* Hover sheen */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Number */}
              <span className="absolute top-5 right-6 font-display text-xs text-sand/30 tabular-nums">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-sand/10 border border-sand/20 text-sand flex items-center justify-center mb-6 group-hover:bg-ember/15 group-hover:border-ember/30 group-hover:text-ember-glow transition-colors duration-300">
                {feature.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-sand mb-3">
                {feature.title}
              </h3>
              <p className="text-sand/65 text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
