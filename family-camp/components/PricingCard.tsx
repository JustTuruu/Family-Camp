"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ACCOMMODATIONS, SITE } from "@/lib/constants";

const ICONS: Record<string, string> = {
  ger: "🏠",
  shovgor: "⛺",
};

const INCLUDES: Record<string, string[]> = {
  ger: ["Унтлагын хэрэгсэл", "Дулааны систем", "Үйлчлэгч"],
  shovgor: ["Нойрны уут", "Гэрэл", "Цахилгаан"],
};

export default function PricingCard() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-ember text-sm font-medium tracking-wider uppercase mb-3 font-body">
            Үнийн мэдээлэл
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-bark mb-3">
            Үнийн мэдээлэл
          </h2>
          <p className="text-bark/60 font-body">
            Энгийн, ойлгомжтой үнийн бодлого
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {ACCOMMODATIONS.map((plan, index) => {
            const tiers = [
              { label: "Өдрийн байрлал (өдрөөр)", price: `₮${plan.pricing.perDay.toLocaleString()}`, highlight: false, note: undefined },
              { label: "1 шөнийн байрлал", price: `₮${plan.pricing.perNight.toLocaleString()}`, highlight: true, note: "шөнө бүр" },
              { label: "2+ шөнийн байрлал", price: `₮${plan.pricing.perNight2Plus.toLocaleString()}`, highlight: false, note: "шөнө бүр" },
            ];

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
                className="bg-white border border-sand rounded-2xl shadow-lg shadow-bark/5 overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-sand/40 px-8 py-6 border-b border-sand">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">{ICONS[plan.id]}</span>
                    <h3 className="font-display text-xl font-bold text-bark">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                {/* Tiers */}
                <div className="px-8 py-6 space-y-3">
                  {tiers.map((tier) => (
                    <div
                      key={tier.label}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                        tier.highlight
                          ? "bg-forest text-cream"
                          : "bg-sand/20"
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
                          className={`font-display font-bold text-base ${
                            tier.highlight ? "text-cream" : "text-bark"
                          }`}
                        >
                          {tier.price}
                        </span>
                        {tier.note && (
                          <span
                            className={`block text-xs font-body ${
                              tier.highlight ? "text-cream/70" : "text-bark/50"
                            }`}
                          >
                            / {tier.note}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Weekend package */}
                <div className="px-8 pb-6">
                  <div className="flex items-center justify-between bg-ember/10 border border-ember/20 rounded-xl px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-bark font-body">
                        Амралтын өдрийн багц
                      </p>
                      <p className="text-xs text-bark/60 font-body">
                        Б, Н · 2 шөнө
                      </p>
                    </div>
                    <span className="font-display font-bold text-lg text-ember">
                      ₮{plan.pricing.weekend.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Includes */}
                <div className="px-8 pb-8">
                  <p className="text-xs text-bark/50 uppercase tracking-wider mb-3 font-body">
                    Багцад багтана
                  </p>
                  <ul className="space-y-1.5">
                    {(INCLUDES[plan.id] ?? []).map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-bark/60 font-body"
                      >
                        <span className="w-4 h-4 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
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

        {/* Note and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-bark/50 text-xs mb-8 font-body">
            * Бүх үнэ нэг байрлалд. Холбоо барих: {SITE.phone}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forest hover:bg-forest/80 text-cream font-medium rounded-full px-10 py-4 text-base transition-colors duration-200 shadow-lg shadow-forest/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Захиалга өгөх
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
