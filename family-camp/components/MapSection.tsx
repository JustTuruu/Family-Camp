"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const INFO_ITEMS = [
  {
    label: "Хаяг",
    value: SITE.address,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Зам",
    value: SITE.distanceFromUB,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    label: "Улирал",
    value: "Нээлттэй үе",
    subValue: "5-р сараас 10-р сар хүртэл",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function MapSection() {
  return (
    <section className="relative bg-forest py-24 md:py-32 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(232,213,176,0.08)_0%,_transparent_55%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-sand/65 mb-5">Байршил</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-sand leading-[1.05] mb-8">
              <span className="text-ember-glow">Нэмэлт мэдээлэл</span>
            </h2>

            <address className="not-italic space-y-5 mb-9">
              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-sand/10 border border-sand/15 flex items-center justify-center flex-shrink-0 mt-0.5 text-sand"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-sand/45 font-body mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sand font-medium font-body">
                      {item.value}
                    </p>
                    <p className="text-sand/55 text-sm font-body">
                      {item.subValue}
                    </p>
                  </div>
                </div>
              ))}
            </address>
          </motion.div>

          {/* Right: map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative bg-cream/5 border border-sand/30 rounded-3xl overflow-hidden h-[420px] md:h-[520px] shadow-2xl shadow-bark/40">
              <iframe
                src={`https://maps.google.com/maps?q=${SITE.coordinates.lat},${SITE.coordinates.lng}(Family+Camp)&z=8&hl=mn&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aguit Camp байршил — Хялганат тосгон, Булган аймаг"
              />
            </div>
            {/* Floating coord chip */}
            <div className="absolute -bottom-4 right-6 bg-bark text-cream rounded-full px-4 py-2 shadow-lg shadow-bark/40 border border-sand/15 text-xs font-body tabular-nums">
              {SITE.coordinates.lat.toFixed(4)}°N ·{" "}
              {SITE.coordinates.lng.toFixed(4)}°E
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
