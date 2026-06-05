"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_CATEGORIES, GALLERY_IMAGES, type GalleryCategory } from "@/lib/constants";

type GalleryImage = (typeof GALLERY_IMAGES)[number];

interface GalleryGridProps {
  images: readonly GalleryImage[];
  variant: "strip" | "masonry";
}

// ─── Shared Lightbox ─────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: readonly GalleryImage[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [index, onClose, onPrev, onNext],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (index !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Зураг ${index + 1} / ${images.length}: ${images[index].alt}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-bark/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-sand/70 hover:text-sand transition-colors z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
            onClick={onClose}
            aria-label="Хаах"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-sand/70 hover:text-sand transition-colors z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Өмнөх зураг"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[85vh] mx-12 md:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={images[index].src.replace("w=600", "w=1200")}
                alt={images[index].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 85vw"
                className="object-contain rounded-xl"
                priority
              />
            </div>
            <p className="text-center text-sand/60 text-sm mt-3 font-body">
              {index + 1} / {images.length}
            </p>
          </motion.div>

          {/* Next button */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-sand/70 hover:text-sand transition-colors z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Дараах зураг"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Strip variant ────────────────────────────────────────────────────────────
function StripGrid({ images }: { images: readonly GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onClose = useCallback(() => setLightboxIndex(null), []);
  const onPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + images.length) % images.length : null,
      ),
    [images.length],
  );
  const onNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % images.length : null,
      ),
    [images.length],
  );

  return (
    <section className="bg-bark py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-sand">
              Зураг
            </h2>
          </div>
          <p className="inline-flex items-center gap-2 text-sand/60 text-sm font-body">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span>Хажуу тийш гүйлгэн үзнэ үү</span>
          </p>
        </motion.div>

        {/* Scrollable strip */}
        <div
          className="overflow-x-auto scrollbar-hide"
          role="region"
          aria-label="Зургийн цомог"
        >
          <div className="flex gap-4 pb-2" style={{ width: "max-content" }}>
            {images.map((img, index) => (
              <motion.button
                type="button"
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onClick={() => setLightboxIndex(index)}
                className="relative flex-shrink-0 w-[260px] md:w-[300px] h-[360px] md:h-[400px] rounded-2xl overflow-hidden snap-start group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                aria-label={`Зургийг томруулах: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-bark/0 group-hover:bg-bark/35 transition-colors duration-300 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="w-9 h-9 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile link to gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center md:hidden"
        >
          <Link
            href="/gallery"
            className="text-ember font-medium hover:text-ember-glow transition-colors inline-flex items-center gap-2 font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
          >
            Бүх зургийг үзэх →
          </Link>
        </motion.div>
      </div>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </section>
  );
}

// ─── Masonry variant ─────────────────────────────────────────────────────────
function MasonryGrid({ images }: { images: readonly GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(
    GALLERY_CATEGORIES[0].id,
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () => images.filter((img) => img.category === activeCategory),
    [images, activeCategory],
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const img of images) {
      counts[img.category] = (counts[img.category] ?? 0) + 1;
    }
    return counts;
  }, [images]);

  const onClose = useCallback(() => setLightboxIndex(null), []);
  const onPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + filteredImages.length) % filteredImages.length
          : null,
      ),
    [filteredImages.length],
  );
  const onNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredImages.length : null,
      ),
    [filteredImages.length],
  );

  const aspectClass = (aspect: string) => {
    if (aspect === "3/4") return "aspect-[3/4]";
    if (aspect === "4/3") return "aspect-[4/3]";
    if (aspect === "4/5") return "aspect-[4/5]";
    return "aspect-[4/3]";
  };

  return (
    <>
      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Зургийн ангилал"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            const count = categoryCounts[cat.id] ?? 0;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium font-body transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
                  isActive
                    ? "bg-forest text-cream shadow-md shadow-forest/25"
                    : "bg-sand/40 text-bark/70 hover:bg-sand/70"
                }`}
              >
                {cat.label}
                <span
                  className={`text-[0.65rem] uppercase tracking-widest ${
                    isActive ? "text-cream/70" : "text-bark/45"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`relative ${aspectClass(img.aspect)} rounded-xl overflow-hidden cursor-pointer group break-inside-avoid mb-4`}
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-bark/0 group-hover:bg-bark/30 transition-colors duration-300 flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
              <span className="sr-only">Зургийг томруулах: {img.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        images={filteredImages}
        index={lightboxIndex}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function GalleryGrid({ images, variant }: GalleryGridProps) {
  if (variant === "strip") {
    return <StripGrid images={images} />;
  }
  return <MasonryGrid images={images} />;
}
