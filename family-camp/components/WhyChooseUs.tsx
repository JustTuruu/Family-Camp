"use client";

import Image from "next/image";
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

const ICON_PROPS = {
  className: "w-7 h-7",
  fill: "none" as const,
  viewBox: "0 0 24 24",
  stroke: "currentColor" as const,
  strokeWidth: 1.4,
  "aria-hidden": true,
};

const GerIcon = (
  <svg {...ICON_PROPS}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M5 20l7-13 7 13M9 20v-5h6v5M12 3v4" />
  </svg>
);

const FamilyIcon = (
  <svg {...ICON_PROPS}>
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 20c0-3 3-5 6-5s6 2 6 5M14 20c0-2.2 1.8-4 3.5-4S21 17.8 21 20" />
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section className="relative bg-forest-deep py-24 md:py-32 overflow-hidden">
      {/* Ambient radial glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/4 w-[40rem] h-[40rem] rounded-full bg-forest/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 right-0 w-[30rem] h-[30rem] rounded-full bg-ember/10 blur-3xl"
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
            Хотын шуугианаас тусгаарлагдсан, байгальд бүрэн уусахуйц орчин.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:auto-rows-[240px]"
        >
          {/* Featured — Цэвэр байгаль (wide with image) */}
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="relative lg:col-span-2 rounded-3xl overflow-hidden group min-h-[300px] lg:min-h-0 ring-1 ring-sand/20"
          >
            <Image
              src="/images/1.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            {/* Bottom-only gradient for text legibility */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-bark/95 via-bark/40 to-transparent"
            />
            {/* Tag pill */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-cream/15 backdrop-blur-md border border-cream/25 rounded-full pl-2 pr-4 py-1.5">
              <span className="w-6 h-6 rounded-full bg-ember/90 text-cream flex items-center justify-center text-[0.6rem] font-medium font-body">
                01
              </span>
              <span className="text-cream text-xs uppercase tracking-widest font-body">
                Байгаль
              </span>
            </div>

            <div className="relative h-full flex flex-col justify-end p-7 md:p-9 text-cream">
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 max-w-md leading-tight">
                Гэмтээгдээгүй цэвэр байгаль
              </h3>
              <p className="text-cream/80 text-sm md:text-base leading-relaxed max-w-md font-body">
                Хылганат голын эрэг, ногоон ой моднд хүрээлэгдсэн, тэнгэр цэлмэг өдрүүд.
              </p>
            </div>
          </motion.article>

          {/* Tall — Одтой тэнгэр (real night sky photo) */}
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="relative lg:row-span-2 rounded-3xl overflow-hidden group min-h-[320px] lg:min-h-0 ring-1 ring-sand/20"
          >
            <Image
              src="https://www.popsci.com/wp-content/uploads/2021/04/16/tyler-rutherford-Uacqp0cIyLc-unsplash-3.jpg?quality=85&w=2048"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            {/* Bottom-only gradient for text legibility */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15"
            />

            {/* Tag pill */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-cream/15 backdrop-blur-md border border-cream/25 rounded-full pl-2 pr-4 py-1.5">
              <span className="w-6 h-6 rounded-full bg-ember/90 text-cream flex items-center justify-center text-[0.6rem] font-medium font-body">
                04
              </span>
              <span className="text-cream text-xs uppercase tracking-widest font-body">
                Тэнгэр
              </span>
            </div>

            <div className="relative h-full flex flex-col justify-end p-7 md:p-8 text-cream">
              <h3 className="font-display text-2xl font-semibold mb-3 leading-tight">
                Одтой шөнийн тэнгэр
              </h3>
              <p className="text-cream/85 text-sm leading-relaxed font-body">
                Гэрлийн бохирдолгүй, тэнгэр дүүрэн од анивчих газар.
              </p>
            </div>
          </motion.article>

          {/* Small — Уламжлалт Монгол гэр (warm sand) */}
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="relative rounded-3xl overflow-hidden group p-7 ring-1 ring-sand/40"
            style={{
              background:
                "linear-gradient(160deg, #F5EDDC 0%, #E8D5B0 100%)",
            }}
          >
            {/* Tag pill */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-bark/8 border border-bark/15 rounded-full pl-2 pr-3 py-1">
              <span className="w-5 h-5 rounded-full bg-bark text-cream flex items-center justify-center text-[0.55rem] font-medium font-body">
                02
              </span>
              <span className="text-bark/70 text-[0.6rem] uppercase tracking-widest font-body">
                Гэр
              </span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-forest/15 border border-forest/25 text-forest flex items-center justify-center mb-5 group-hover:bg-ember/15 group-hover:border-ember/40 group-hover:text-ember transition-colors duration-300">
              {GerIcon}
            </div>
            <h3 className="font-display text-xl font-semibold text-bark mb-3 leading-tight">
              Уламжлалт Монгол гэр
            </h3>
            <p className="text-bark/65 text-sm leading-relaxed font-body">
              Эх орны соёлд багтсан, тав тухтай байрлал.
            </p>
          </motion.article>

          {/* Small — Гэр бүлд таатай (cream) */}
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="relative rounded-3xl overflow-hidden group p-7 bg-cream ring-1 ring-sand/40"
          >
            {/* Tag pill */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-bark/8 border border-bark/15 rounded-full pl-2 pr-3 py-1">
              <span className="w-5 h-5 rounded-full bg-bark text-cream flex items-center justify-center text-[0.55rem] font-medium font-body">
                03
              </span>
              <span className="text-bark/70 text-[0.6rem] uppercase tracking-widest font-body">
                Гэр бүл
              </span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-ember/15 border border-ember/30 text-ember flex items-center justify-center mb-5 group-hover:bg-ember group-hover:border-ember group-hover:text-cream transition-colors duration-300">
              {FamilyIcon}
            </div>
            <h3 className="font-display text-xl font-semibold text-bark mb-3 leading-tight">
              Гэр бүлд таатай
            </h3>
            <p className="text-bark/65 text-sm leading-relaxed font-body">
              Хүүхэд, том хүн бүгдэд тохирсон амгалан орчин.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
