"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ACCOMMODATIONS, SITE } from "@/lib/constants";

const ACCOMMODATION_ICONS: Record<string, React.ReactNode> = {
  ger: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 11l9-7 9 7M5 11v9h14v-9M10 20v-5h4v5"
      />
    </svg>
  ),
  shovgor: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 20h18M5 20l7-13 7 13M9 20v-5h6v5"
      />
    </svg>
  ),
};

const INCLUDES: Record<string, string[]> = {
  ger: ["Унтлагын хэрэгсэл", "Дулааны систем", "Үйлчлэгч"],
  shovgor: ["Нойрны уут", "Гэрэл", "Цахилгаан"],
};

const POPULAR_ID = "ger";

export default function PricingCard() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* Soft tint */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cream-warm to-transparent"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="eyebrow text-ember justify-center mb-4">Үнэлгээ</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-bark mb-4">
            Энгийн, ил тод үнэ
          </h2>
          <p className="text-bark/60 font-body max-w-md mx-auto">
            Нэмэлт хураамжгүй. Сонгосон багц чинь л төлөх дүн.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {ACCOMMODATIONS.map((plan, index) => {
            const tiers = [
              {
                label: "1 шөнө",
                price: `₮${plan.pricing.perNight.toLocaleString()}`,
                highlight: true,
              },
              {
                label: "2+ шөнө",
                price: `₮${plan.pricing.perNight2Plus.toLocaleString()}`,
                highlight: false,
              },
            ];
            const isPopular = plan.id === POPULAR_ID;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative bg-white border rounded-3xl shadow-lg shadow-bark/5 overflow-hidden ${
                  isPopular
                    ? "border-ember/40 ring-1 ring-ember/30"
                    : "border-sand"
                }`}
              >
                {/* Card header */}
                <div className="px-7 pt-7 pb-5">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="w-11 h-11 rounded-xl bg-forest/10 text-forest flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {ACCOMMODATION_ICONS[plan.id]}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-bark leading-tight">
                        {plan.name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-bark/45 font-body mt-0.5">
                        {plan.nameEn}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tiers */}
                <div className="px-7 pb-2 space-y-2.5">
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
                <div className="px-7 pt-3 pb-6">
                  <div className="flex items-center justify-between bg-ember/10 border border-ember/20 rounded-xl px-4 py-3.5">
                    <div>
                      <p className="text-sm font-medium text-bark font-body">
                        Амралтын өдрийн багц
                      </p>
                      <p className="text-xs text-bark/55 font-body mt-0.5">
                        Бямба, Ням · 2 шөнө
                      </p>
                    </div>
                    <span className="font-display font-semibold text-lg text-ember">
                      ₮{plan.pricing.weekend.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Includes */}
                <div className="px-7 pb-8 border-t border-sand/60 pt-6">
                  <p className="text-[0.65rem] text-bark/45 uppercase tracking-widest mb-3 font-body">
                    Багцад багтана
                  </p>
                  <ul className="space-y-2">
                    {(INCLUDES[plan.id] ?? []).map((item) => (
                      <li
                        key={item}
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
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
          <p className="text-bark/45 text-xs mt-6 font-body">
            Утсаар:{" "}
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="text-bark/70 hover:text-ember transition-colors"
            >
              {SITE.phone}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
