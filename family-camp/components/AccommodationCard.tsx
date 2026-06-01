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
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-ember text-sm font-medium tracking-wider uppercase mb-3 font-body">
            Байрлал
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-bark">
            Байрлалын төрлүүд
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-3xl overflow-hidden shadow-lg shadow-bark/10 group ${
                  isFeatured
                    ? "bg-forest/10 ring-2 ring-ember/30"
                    : "bg-sand/30"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.nameEn}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold text-bark mb-3">
                    {item.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-sand/60 text-bark/70 text-xs px-3 py-1.5 rounded-full font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-semibold text-bark">
                      ₮{item.pricing.perDay.toLocaleString()} / өдөр
                    </span>
                    <Link
                      href="/accommodation"
                      className="text-ember font-medium text-sm hover:text-ember/70 transition-colors inline-flex items-center gap-1 font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                    >
                      Дэлгэрэнгүй →
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
