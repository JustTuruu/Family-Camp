"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ACCOMMODATIONS } from "@/lib/constants";

const INCLUDES: Record<string, string[]> = {
  ger: ["Унтлагын хэрэгсэл", "Дулааны систем", "Үйлчлэгч"],
  shovgor: ["Нойрны уут", "Гэрэл", "Цахилгаан"],
};

interface AccommodationCardProps {
  featured?: boolean;
}

export default function AccommodationCard({
  featured,
}: AccommodationCardProps) {
  return (
    <section
      id="accommodation"
      className="relative bg-cream-warm py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="eyebrow text-ember mb-4">Байрлал</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-bark max-w-xl">
              Мэдээлэл
            </h2>
            <p className="text-bark/60 font-body max-w-md mt-4">
              Сонгосон багц чинь л төлөх дүн. Нэмэлт хураамжгүй.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {ACCOMMODATIONS.map((item, index) => {
            const isFeatured = featured && index === 0;
            const tiers = [
              {
                label: "1 шөнө",
                price: `₮${item.pricing.perNight.toLocaleString()}`,
                highlight: true,
              },
              {
                label: "2+ шөнө",
                price: `₮${item.pricing.perNight2Plus.toLocaleString()}`,
                highlight: false,
              },
            ];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative rounded-3xl overflow-hidden shadow-lg shadow-bark/10 group bg-white flex flex-col ${
                  isFeatured ? "ring-2 ring-ember/40" : "ring-1 ring-sand/60"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.nameEn}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bark/40 to-transparent"
                    aria-hidden="true"
                  />

                  {isFeatured && (
                    <div className="absolute top-4 right-4 bg-ember text-cream text-[0.65rem] font-medium uppercase tracking-widest px-3 py-1.5 rounded-full font-body shadow-md">
                      Онцлох
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-semibold text-bark mb-2">
                    {item.name}
                  </h3>
                  <p className="text-bark/55 text-xs uppercase tracking-widest font-body mb-5">
                    {item.nameEn}
                  </p>

                  {/* Pricing tiers */}
                  <div className="space-y-2.5 mb-3">
                    {tiers.map((tier) => (
                      <div
                        key={tier.label}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                          tier.highlight ? "bg-forest text-cream" : "bg-sand/25"
                        }`}
                      >
                        <span
                          className={`text-sm font-body ${
                            tier.highlight ? "text-cream/90" : "text-bark/70"
                          }`}
                        >
                          {tier.label}
                        </span>
                        <div className="text-right">
                          <span
                            className={`font-display font-semibold text-base ${
                              tier.highlight ? "text-cream" : "text-bark"
                            }`}
                          >
                            {tier.price}
                          </span>
                          <span
                            className={`block text-[0.65rem] uppercase tracking-widest font-body ${
                              tier.highlight ? "text-cream/70" : "text-bark/45"
                            }`}
                          ></span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Weekend package */}
                  <div className="flex items-center justify-between bg-ember/10 border border-ember/20 rounded-xl px-4 py-3.5 mb-6">
                    <div>
                      <p className="text-sm font-medium text-bark font-body">
                        Амралтын өдрийн багц
                      </p>
                      <p className="text-xs text-bark/55 font-body mt-0.5">
                        Бямба, Ням · 2 шөнө
                      </p>
                    </div>
                    <span className="font-display font-semibold text-lg text-ember">
                      ₮{item.pricing.weekend.toLocaleString()}
                    </span>
                  </div>

                  {/* Includes */}
                  <div className="border-t border-sand/60 pt-5 mb-6">
                    <p className="text-[0.65rem] text-bark/45 uppercase tracking-widest mb-3 font-body">
                      Багцад багтана
                    </p>
                    <ul className="space-y-2">
                      {(INCLUDES[item.id] ?? []).map((entry) => (
                        <li
                          key={entry}
                          className="flex items-center gap-2.5 text-sm text-bark/70 font-body"
                        >
                          <span
                            className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center flex-shrink-0"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-2.5 h-2.5 text-forest"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          {entry}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-5 border-t border-sand/60 flex items-center justify-end">
                    <Link
                      href="/accommodation"
                      className="group/cta inline-flex items-center gap-1.5 text-ember font-medium text-sm hover:text-ember-glow transition-colors font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                    >
                      Дэлгэрэнгүй
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-forest hover:bg-forest-deep text-cream font-medium rounded-full px-9 py-4 text-base transition-all duration-300 shadow-lg shadow-forest/30 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Захиалга өгөх
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
