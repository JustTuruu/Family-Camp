"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ACCOMMODATIONS } from "@/lib/constants";

function ImageGallery({ images }: { images: readonly string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative aspect-[4/3] rounded-xl overflow-hidden"
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </div>
  );
}

function AmenitiesGrid({ amenities }: { amenities: readonly string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
      {amenities.map((item) => (
        <div
          key={item}
          className="flex items-center gap-2 text-sm text-bark/70 font-body"
        >
          <span
            className="w-5 h-5 rounded-full bg-forest/15 flex items-center justify-center flex-shrink-0"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          {item}
        </div>
      ))}
    </div>
  );
}

function PricingTable({
  rows,
}: {
  rows: { category: string; price: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-sand mb-8">
      <table className="w-full text-sm font-body">
        <thead>
          <tr className="bg-sand/40">
            <th className="text-left px-5 py-3 font-medium text-bark/70 tracking-wide text-xs uppercase">
              Өдрийн мэдээлэл
            </th>
            <th className="text-right px-5 py-3 font-medium text-bark/70 tracking-wide text-xs uppercase">
              Үнэ
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.category}
              className={i % 2 === 0 ? "bg-white" : "bg-sand/10"}
            >
              <td className="px-5 py-3.5 text-bark/70">{row.category}</td>
              <td className="px-5 py-3.5 text-right font-display font-semibold text-bark">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AccommodationPage() {
  return (
    <div>
      {/* Page hero */}
      <header className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&q=80"
          alt="Family Camp байрлалын ерөнхий харагдах байдал"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bark/55" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sand/70 text-xs tracking-widest uppercase mb-3 font-body"
          >
            Family Camp
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-cream"
          >
            Байрлал
          </motion.h1>
        </div>
      </header>

      {/* Accommodation sections */}
      {ACCOMMODATIONS.map((accommodation, index) => {
        const pricingRows = [
          {
            category: "Даваа-Пүрэв",
            price: `₮${accommodation.pricing.perDay.toLocaleString()}`,
          },
          {
            category: "Баасан-Ням",
            price: `₮${accommodation.pricing.weekend.toLocaleString()}`,
          },
          {
            category: "2-с дээш өдөр",
            price: `₮${accommodation.pricing.perNight2Plus.toLocaleString()}`,
          },
        ];

        const isEven = index % 2 === 0;

        return (
          <section
            key={accommodation.id}
            className={isEven ? "bg-cream py-20 md:py-28" : "py-20 md:py-28"}
            style={
              isEven ? undefined : { background: "rgba(232, 213, 176, 0.2)" }
            }
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-ember text-sm font-medium tracking-wider uppercase mb-4 font-body">
                  Байрлал #{index + 1}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-2">
                      {accommodation.name}
                    </h2>
                    <p className="text-bark/60 font-body">
                      👥 {accommodation.capacity}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="bg-forest text-cream text-sm font-medium px-4 py-2 rounded-full font-body">
                      ₮{accommodation.pricing.perDay.toLocaleString()} / өдөр
                    </span>
                  </div>
                </div>
              </motion.div>

              <ImageGallery images={accommodation.images} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-display text-xl font-semibold text-bark mb-5">
                  Хэрэгсэл
                </h3>
                <AmenitiesGrid amenities={accommodation.amenities} />

                <h3 className="font-display text-xl font-semibold text-bark mb-5">
                  Үнийн мэдээлэл
                </h3>
                <PricingTable rows={pricingRows} />

                <Link
                  href="/contact"
                  className="inline-block bg-ember hover:bg-ember/80 text-cream font-medium rounded-full px-8 py-3.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                >
                  Холбоо барих
                </Link>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
