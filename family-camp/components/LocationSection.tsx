"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const stats = [
  { value: SITE.distanceFromUB, label: "Эрдэнэт хотоос" },
  { value: "Хялганат", label: "Булган аймаг" },
];

export default function LocationSection() {
  return (
    <section className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-ember text-sm font-medium tracking-wider uppercase mb-4 font-body">
              Бидний тухай
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-bark leading-tight mb-6">
              Байгалийн тэвэрт,
              <br />
              тайвшрал дотор
            </h2>
            <p className="text-bark/70 leading-relaxed mb-4 font-body">
              {SITE.province}н {SITE.village}д байрлах {SITE.name} нь таньд
              байгалийн цэвэр агаар, ногоон ой, гол горхины дуу чимээг
              бэлэглэнэ. Энд ирэх бүр та өдөр тутмын амьдралынхаа ачааг тайлж,
              цаг хугацаа зогссон мэт тайвшрах боломжтой.
            </p>
            <p className="text-bark/50 text-sm leading-relaxed mb-10 italic font-body">
              Nestled in {SITE.village}, {SITE.province} — surrounded by ancient
              forests, winding rivers, and open steppe.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-sand/40 border border-sand rounded-full px-5 py-2.5"
                >
                  <span className="font-display font-semibold text-bark text-sm">
                    {stat.value}
                  </span>
                  <span className="text-bark/60 text-xs ml-1.5 font-body">
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-bark/20">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                alt="Монголын ойн гол горхины үзэмж"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-sand rounded-2xl -z-10 opacity-60"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -right-4 w-20 h-20 bg-ember/20 rounded-full -z-10"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
