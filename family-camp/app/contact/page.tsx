"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Page header */}
      <header className="bg-bark pt-28 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-cream"
          >
            Холбоо барих
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sand/70 mt-3 font-body"
          >
            Захиалга болон асуулт байвал холбогдоно уу
          </motion.p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <address className="not-italic space-y-6 mb-12">
            {/* Phone */}
            <div className="flex items-center gap-5">
              <div
                className="w-12 h-12 rounded-2xl bg-sand/50 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5 text-forest"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-bark/50 uppercase tracking-wider mb-1 font-body">
                  Утас
                </p>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="block text-bark text-lg font-medium hover:text-ember transition-colors font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                >
                  {SITE.phone}
                </a>
                <a
                  href={`tel:${SITE.phone2.replace(/\s/g, "")}`}
                  className="block text-bark text-lg font-medium hover:text-ember transition-colors font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                >
                  {SITE.phone2}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5">
              <div
                className="w-12 h-12 rounded-2xl bg-sand/50 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5 text-forest"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-bark/50 uppercase tracking-wider mb-1 font-body">
                  Хаяг
                </p>
                <a
                  href={`https://maps.google.com/?q=${SITE.coordinates.lat},${SITE.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bark text-lg font-medium hover:text-ember transition-colors font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                >
                  {SITE.province}, {SITE.village}
                </a>
              </div>
            </div>
          </address>

          {/* Google Maps — Эрдэнэт хотоос Family Camp хүртэлх бүс харуулна */}
          <div className="rounded-2xl overflow-hidden border border-sand shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d75000!2d104.187!3d49.246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x5d9747b7d9b63d29%3A0x97b1ffd7d0da67c5!2sErdenet%2C+Mongolia!3m2!1d49.0333!2d104.0444!4m5!1s0x0%3A0x0!2s49.464922%2C104.330655!3m2!1d49.464922!2d104.330655!5e0!3m2!1smn!2smn!4v1699000000000"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Эрдэнэтээс Aguta Camp хүртэлх зам"
            />
          </div>

          {/* Directions button */}
          <a
            href={`https://www.google.com/maps/dir/Эрдэнэт,+Монгол+улс/${SITE.coordinates.lat},${SITE.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 w-full bg-forest hover:bg-forest/80 text-cream font-medium rounded-xl px-6 py-3.5 transition-colors duration-200 font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
            Эрдэнэтээс замчлах
          </a>
        </motion.div>
      </div>
    </div>
  );
}
