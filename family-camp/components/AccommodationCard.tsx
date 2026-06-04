"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ACCOMMODATIONS } from "@/lib/constants";

interface AccommodationCardProps {
  featured?: boolean;
}

export default function AccommodationCard({
  featured,
}: AccommodationCardProps) {
  return (
    <section className="relative bg-cream-warm py-24 md:py-32 overflow-hidden">
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
              Хоёр төрлийн буудал, нэг л байгаль
            </h2>
          </div>
          <Link
            href="/accommodation"
            className="link-underline text-bark/70 hover:text-bark text-sm font-medium font-body self-start md:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
          >
            Бүх байрлал
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ACCOMMODATIONS.map((item, index) => {
            const isFeatured = featured && index === 0;
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
                className={`relative rounded-3xl overflow-hidden shadow-lg shadow-bark/10 group bg-white ${
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
                  {/* Bottom gradient for legibility of overlay chips */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bark/40 to-transparent" aria-hidden="true" />

                  {/* Capacity chip */}
                  <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur-sm text-bark text-xs font-medium px-3 py-1.5 rounded-full font-body flex items-center gap-1.5 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m12-12a4 4 0 11-8 0 4 4 0 018 0zm6 4a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.capacity}
                  </div>

                  {isFeatured && (
                    <div className="absolute top-4 right-4 bg-ember text-cream text-[0.65rem] font-medium uppercase tracking-widest px-3 py-1.5 rounded-full font-body shadow-md">
                      Онцлох
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  <h3 className="font-display text-2xl font-semibold text-bark mb-2">
                    {item.name}
                  </h3>
                  <p className="text-bark/55 text-xs uppercase tracking-widest font-body mb-5">
                    {item.nameEn}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-sand/40 text-bark/70 text-xs px-3 py-1.5 rounded-full font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-end justify-between pt-5 border-t border-sand/60">
                    <div>
                      <p className="text-xs text-bark/45 uppercase tracking-widest font-body mb-0.5">
                        Эхлэх үнэ
                      </p>
                      <p className="font-display text-xl font-semibold text-bark">
                        ₮{item.pricing.perDay.toLocaleString()}
                        <span className="text-bark/45 text-sm font-body font-normal"> / өдөр</span>
                      </p>
                    </div>
                    <Link
                      href="/accommodation"
                      className="group/cta inline-flex items-center gap-1.5 text-ember font-medium text-sm hover:text-ember-glow transition-colors font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                    >
                      Дэлгэрэнгүй
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
