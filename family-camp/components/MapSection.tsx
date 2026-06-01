"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const landmarks = [
  "Улаанбаатараас А4 чиглэлийн замаар хөдлөнө",
  "Булган аймгийн төвөөс 45 км зайтай",
  "Хялганат голын эрэгт байрлана",
  "Бөмбөгөр ногоон ойн дунд",
];

export default function MapSection() {
  return (
    <section className="bg-forest py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sand/60 text-sm font-medium tracking-wider uppercase mb-4 font-body">
              Байршил
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-sand mb-8">
              Байршил
            </h2>

            <address className="not-italic space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl bg-sand/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5 text-sand"
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
                </div>
                <div>
                  <p className="text-sand font-medium font-body">
                    {SITE.address}
                  </p>
                  <p className="text-sand/60 text-sm font-body">Монгол Улс</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl bg-sand/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5 text-sand"
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
                </div>
                <div>
                  <p className="text-sand font-medium font-body">
                    {SITE.distanceFromUB}
                  </p>
                  <p className="text-sand/60 text-sm font-body">
                    5-6 цагийн зам
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl bg-sand/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5 text-sand"
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
                </div>
                <div>
                  <p className="text-sand font-medium font-body">
                    Нээлттэй цаг
                  </p>
                  <p className="text-sand/60 text-sm font-body">
                    5-р сараас 10-р сар хүртэл
                  </p>
                </div>
              </div>
            </address>

            {/* Landmarks list */}
            <div>
              <p className="text-sand/60 text-xs uppercase tracking-wider mb-4 font-body">
                Чиглэл
              </p>
              <ul className="space-y-2.5">
                {landmarks.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-sand/70 font-body"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-cream/10 border border-sand/30 rounded-3xl overflow-hidden h-[400px] md:h-[480px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200000!2d${SITE.coordinates.lng}!3d${SITE.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1smn!2smn!4v1699000000000`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Family Camp байршил — Хялганат тосгон, Булган аймаг"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
