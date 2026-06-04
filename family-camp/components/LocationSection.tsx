"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const stats = [
  { value: SITE.distanceFromUB, label: "Эрдэнэт хотоос" },
  { value: "Хялганат", label: "Булган аймаг" },
];

const HIGHLIGHTS = [
  "Хялганат голын эрэг дагуу",
  "Бөмбөгөр ногоон ойн дунд",
  "Шөнийн тэнгэр од дүүрэн",
];

export default function LocationSection() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="eyebrow text-ember mb-5">Бидний тухай</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-bark leading-[1.05] mb-6">
              Байгалийн тэвэрт,
              <br />
              <span className="italic text-forest">тайвшрал</span> дотор
            </h2>
            <p className="text-bark/70 leading-relaxed mb-8 font-body max-w-xl">
              {SITE.province}н {SITE.village}д байрлах {SITE.name} нь таньд
              байгалийн цэвэр агаар, ногоон ой, гол горхины дуу чимээг
              бэлэглэнэ. Энд ирэх бүр та өдөр тутмын амьдралынхаа ачааг тайлж,
              цаг хугацаа зогссон мэт тайвшрах боломжтой.
            </p>

            {/* Highlights list */}
            <ul className="space-y-2.5 mb-9">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-bark/75 font-body"
                >
                  <span
                    className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-forest"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-sand rounded-full px-5 py-2.5 shadow-sm shadow-bark/5"
                >
                  <span className="font-display font-semibold text-bark text-sm">
                    {stat.value}
                  </span>
                  <span className="text-bark/55 text-xs ml-1.5 font-body">
                    · {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.15,
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-bark/20">
              <Image
                src="/images/1.png"
                alt="Хылганат нутгийн муруй голын агаараас харсан үзэмж"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Subtle frame */}
              <div className="absolute inset-0 ring-1 ring-inset ring-cream/30 rounded-[2rem] pointer-events-none" aria-hidden="true" />
            </div>

            {/* Decorative shapes */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 bg-ember/15 rounded-full -z-10 blur-sm"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-10 right-10 w-40 h-40 bg-sand rounded-full -z-10 opacity-50 blur-md"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
